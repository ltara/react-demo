import React, { Component } from 'react'
import { createContext } from 'react'

export const MyContext  = createContext()

export const connect = (mapStateToProps, mapDispatchToProps) => {
  return (WrapperComponent) => {
    class Connect extends Component {
      constructor() {
        super()
        this.state = {
          allProps: {}
        }
      }

      UNSAFE_componentWillMount() {
        const { store } = this.context
        this._updateProps()
        store.subscribe(() => this._updateProps())
      }

      _updateProps() {
        const { store } = this.context
        const stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {}
        const dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {}
        this.setState({
          allProps: {
            ...stateProps,
            ...dispatchProps,
            ...this.props
          }
        })
      }

      render() {
        return <WrapperComponent {...this.state.allProps} />
      }
    }
    Connect.contextType = MyContext
    return Connect
  }
}
