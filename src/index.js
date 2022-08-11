import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './index.css'

import CommentInput from './CommentInput'
import CommentList from './CommentList'


class Index extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  handleSubmitComment(data) {
    this.setState({
      comments: [...this.state.comments, data]
    })
  }

  render() {
    return (
      <div className="content">
        <CommentInput onSubmit={ this.handleSubmitComment.bind(this) } />
        <CommentList comments={ this.state.comments } />
      </div>
    )
  }
}

ReactDom.render(
  <Index />,
  document.getElementById('root')
)