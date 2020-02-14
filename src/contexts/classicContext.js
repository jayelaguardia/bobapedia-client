import React, { Component } from 'react'

const classicContext = React.createContext({
  classicList: [],
  classic: null,
  error: null,
  setError: () => {},
  clearError: () => {},
  setClassicList: () => {},
  setClassic: () => {},
})
export default classicContext

export class ClassicProvider extends Component {
  state = {
    classicList: [],
    classic: null,
    error: null,
  };

  setClassic = classic => {
    this.setState({ classic })
  }

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
      classic: this.state.classic,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setClassicList: this.setClassicList,
      setClassic: this.setClassic,
    }
    return (
      <classicContext.Provider value={value}>
        {this.props.children}
      </classicContext.Provider>
    )
  }
}