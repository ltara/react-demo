import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  renderSquare(coord) {
    const i = 3 * coord[0] + coord[1] - 4
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(coord)}
      />
    )
  }

  render() {
    const board = {
      row: 3,
      col: 3
    }
    const list = Array(board.row).fill(null).map((item, xIndex) => {
      return (
        <div key={xIndex} className='board-row'>
          {
            Array(board.col).fill(null).map((item, yIndex) => {
              return this.renderSquare([xIndex + 1, yIndex + 1])
            })
          }
        </div>
      )
    })
    return (
      <div>
        {list}
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          lastStepCoord: [null, null]
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(coord) {
    const i = 3 * coord[0] + coord[1] - 4
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([
        {
          squares: squares,
          lastStepCoord: coord
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start'
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} style={{fontWeight: this.state.stepNumber === move ? 'bold' : ''}}>{ desc }</button>
          <span style={{marginLeft: 10 + 'px'}}>{ `(${ step.lastStepCoord[0] }, ${ step.lastStepCoord[1]} )` }</span>
        </li>
      )
    })

    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }

    return (
      <div className='game'>
        <div className='game-board'>
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'))

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
