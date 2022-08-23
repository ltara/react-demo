import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import { initComment, deleteComment } from '../reducers/comments'

// CommentsListContainer
// 一个 smart 组件，负责评论列表数据的加载、初始化、删除评论
// 沟通 CommentList 和 state
class CommentsListContainer extends Component {
  UNSAFE_componentWillMount() {
    // componentWillMount 声明周期中初始化评论
    this._loadComments()
  }

  _loadComments() {
    let comments = window.localStorage.getItem('comments')
    comments = comments ? JSON.parse(comments) : []
    this.props.initComments(comments)
  }

  handleDeleteComment(index) {
    const { comments } = this.props
    // props不能变，所以这里新建一个删除了特定下标的评论列表
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ]
    // 保存最新的评论列表到 LocalStorage
    localStorage.setItem('comments', JSON.stringify(newComments))
    if (this.props.onDeleteComment) {
      // this.props.onDeleteComment 是 connect 传进来的
      // 会 dispatch 一个 action 去删除评论
      this.props.onDeleteComment(index)
    }
  }

  render() {
    return (
      <CommentList
        comments={this.props.comments}
        onDeleteComment={this.handleDeleteComment.bind(this)}
      />
    )
  }
}

// 评论列表从 state.comments 中获取
const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initComments: (comments) => {
      dispatch(initComment(comments))
    },
    onDeleteComment: (commentIndex) => {
      dispatch(deleteComment(commentIndex))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsListContainer)
