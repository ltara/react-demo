import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MyContext } from './react-redux'
import Header from './Header'
import Content from './Content'
import './index.css'

function createStore(reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  dispatch({}) // 初始化 state
  return { getState, subscribe, dispatch }
}

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default: 
    return state
  }
}

const store = createStore(themeReducer)

class Index extends Component {
  render() {
    return (
      <div>
        <MyContext.Provider value={{ store }}>
          <Header />
          <Content />
        </MyContext.Provider>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)

