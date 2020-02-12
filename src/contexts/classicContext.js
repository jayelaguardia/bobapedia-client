import React, { Component } from 'react'

const classicContext = React.createContext({
  classicList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setClassicList: () => {},
})
export default classicContext

export class ClassicProvider extends Component {
  state = {
    classicList: [],
    error: null,
  };

  setClassicList = classicList => {
    this.setState({ classicList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      classicList: this.state.classicList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setClassicList: this.setClassicList,
    }
    return (
      <classicContext.Provider value={value}>
        {this.props.children}
      </classicContext.Provider>
    )
  }
}