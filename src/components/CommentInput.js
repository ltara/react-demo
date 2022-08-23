import React, { Component } from 'react'

class CommentInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: props.username,
      content: ''
    }
  }

  componentDidMount() {
    this.commentInput.focus()
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleCommentChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  handleUsernameBlur(e) {
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(e.target.value)
    }
  }

  handleSubmit() {
    const { username, content } = this.state
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username,
        content,
        createdTime: Date.now()
      })
    }
    this.setState({content: ''})
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
            value={this.state.content}
            onChange={ this.handleCommentChange.bind(this) }
          />
        </div>
        <button className="btn" onClick={ this.handleSubmit.bind(this) }>发布</button>
      </div>
    )
  }
}

export default CommentInput


