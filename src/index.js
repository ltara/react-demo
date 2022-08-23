import React from 'react'
import ReactDom from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import { CommentsReducer } from './reducers/comments'
import './index.css'

const store = configureStore({ reducer: CommentsReducer })

ReactDom.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')
)