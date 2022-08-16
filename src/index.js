import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './index.css'

import CommentInput from './CommentInput'
import CommentList from './CommentList'


class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  UNSAFE_componentWillMount() {
    this._loadComments()
  }

  _loadComments() {
    const comments = window.localStorage.getItem('comments')
    if (comments) {
      this.setState({ comments: JSON.parse(comments) })
    }
  }

  _saveComments(comments) {
    window.localStorage.setItem('comments', JSON.stringify(comments))
  }

  handleSubmitComment(data) {
    this.setState((state) => {
      const newComments = [...state.comments, data]
      this._saveComments(newComments)
      return {
        comments: newComments
      }
    })
  }

  handleRemoveComments(index) {
    this.setState({
      comments: this.state.comments.filter((item, i) => { return (i !== index) })
    })
  }

  render() {
    return (
      <div className="content">
        <CommentInput onSubmit={ this.handleSubmitComment.bind(this) } />
        <CommentList comments={ this.state.comments } onRemoveComment={this.handleRemoveComments.bind(this)} />
      </div>
    )
  }
}

ReactDom.render(
  <CommentApp />,
  document.getElementById('root')
)