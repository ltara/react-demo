import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return (
      <div className="comment-content">
        <span>{ this.props.data.username }：</span>
        <span>{ this.props.data.comment }</span>
      </div>
    )
  }
}

class CommentList extends Component {
  render() {
    return (
      <div className="card comment-card">
        {
          this.props.comments.map((item, index) => {
            return (
              <div key={index} className="comment-list-item">
                <Comment data={{username: item.username, comment: item.comment}} />
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