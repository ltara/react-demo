import React, { Component } from 'react'
import { formatterTime } from '../util'
import Comment from './Comment'

class CommentList extends Component {
  constructor() {
    super()
    this.state = {
      currentTime: Date.now()
    }
  }
  UNSAFE_componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({currentTime: Date.now()})
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = null
  }

  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    return (
      <div className="card comment-card">
        {
          this.props.comments.map((item, index) => {
            return (
              <div key={index}>
                <div className="comment-list-item">
                  <Comment
                    data={{username: item.username, content: item.content}}
                    index={index}
                    onDeleteComment={this.handleDeleteComment.bind(this)}
                  />
                  <span style={{float: 'right'}}>{ formatterTime(this.state.currentTime - Number(item.createdTime)) }</span>
                </div>
                <hr />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default CommentList