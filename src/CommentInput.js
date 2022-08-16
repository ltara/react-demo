import React, { Component } from 'react'

class CommentInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      comment: ''
    }
  }

  componentDidMount() {
    this._loadUsername()
  }

  _saveUsername(username) {
    window.localStorage.setItem('username', username)
  }

  _loadUsername() {
    const username = window.localStorage.getItem('username')
    if (username) {
      this.setState({ username })
      this.commentInput.focus()
    } else {
      this.usernameInput.focus()
    }
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleCommentChange(e) {
    this.setState({
      comment: e.target.value
    })
  }

  handleUsernameBlur(e) {
    this._saveUsername(e.target.value)
  }

  handleSubmit() {
    const { username, comment } = this.state
    if (!username) {
      alert('请输入用户名')
      return
    }
    if (!comment){
      alert('请输入评论内容')
      return
    }
    if (this.props.onSubmit) {
      this.props.onSubmit({username, comment, createdTime: Date.now()})
    }
    this.setState({comment: ''})
  }

  render() {
    return (
      <div className="card form-card">
        <div className="username-wrapper">
          <label htmlFor="username">用户名：</label>
          <input
            type="text"
            id="username"
            ref={(input) => this.usernameInput = input}
            value={this.state.username}
            onChange={ this.handleUsernameChange.bind(this) }
            onBlur={ this.handleUsernameBlur.bind(this) }
          />
        </div>
        <div className="comment-wrapper">
          <label htmlFor="comment">评论内容：</label>
          <textarea
            id="comment"
            ref={(input) => this.commentInput = input}
            value={this.state.comment}
            onChange={ this.handleCommentChange.bind(this) }
          />
        </div>
        <button className="btn" onClick={ this.handleSubmit.bind(this) }>发布</button>
      </div>
    )
  }
}

export default CommentInput