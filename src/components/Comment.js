import React, { Component } from 'react'

export default class Comment extends Component {
  _getProcessedContent(content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

  handleDeleteComment() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  render() {
    const { username, content } = this.props.data
    return (
      <div className="comment-content">
        <span>{ username }：</span>
        <span style={{ float: 'right', cursor: 'pointer' }} onClick={ this.handleDeleteComment.bind(this) }>X</span>
        <p dangerouslySetInnerHTML={{ __html: this._getProcessedContent(content) }} />
      </div>
    )
  }
}