import React, { Component } from 'react'
import { formatterTime } from './util'

class Comment extends Component {
  _getProcessedContent(comment) {
    return comment
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

  handleRemoveComment() {
    if (this.props.onRemoveComment) {
      this.props.onRemoveComment(this.props.index)
    }
  }

  render() {
    const { username, comment } = this.props.data
    return (
      <div className="comment-content">
        <span>{ username }：</span>
        <span style={{ float: 'right', cursor: 'pointer' }} onClick={ this.handleRemoveComment.bind(this) }>X</span>
        <p dangerouslySetInnerHTML={{ __html: this._getProcessedContent(comment) }} />
      </div>
    )
  }
}

class CommentList extends Component {
  constructor() {
    super()
    this.state = {
      currentTime: Date.now()
    }
    this.timer = null
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

  handleRemoveComment(index) {
    if (this.props.onRemoveComment) {
      this.props.onRemoveComment(index)
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
                    data={{username: item.username, comment: item.comment}}
                    index={index}
                    onRemoveComment={this.handleRemoveComment.bind(this)}
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