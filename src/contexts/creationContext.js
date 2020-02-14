import React, { Component } from 'react'

const creationContext = React.createContext({
  creationList: [],
  creation: null,
  error: null,
  setError: () => {},
  clearError: () => {},
  setCreationList: () => {},
  setCreation: () => {},
  addCreation: () => {},
  updateCreation: () => {},
  deleteCreation: () => {},
})
export default creationContext

export class CreationProvider extends Component {
  state = {
    creationList: [],
    creation: null,
    error: null,
  };

  setCreationList = creationList => {
    this.setState({ creationList })
  }

  setCreation = creation => {
    this.setState({ creation })
  }

  addCreation = creation => {
    this.setCreationList([
      ...this.state.creationList,
      creation
    ])
  }

  deleteCreation = creationID => {
    let newSet = this.state.creationList.filter(creation => creation.creation_id !== creationID)
    this.setCreationList(newSet)
  }

  updateCreation = upCreation => {
    let newSet = this.state.creationList.map(creation => (creation.creation_id === upCreation.creation_id) ? upCreation : creation)
    this.setCreationList(newSet)
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
      creationList: this.state.creationList,
      creation: this.state.creation,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCreationList: this.setCreationList,
      setCreation: this.setCreation,
      deleteCreation: this.deleteCreation,
      updateCreation: this.updateCreation,
    }
    return (
      <creationContext.Provider value={value}>
        {this.props.children}
      </creationContext.Provider>
    )
  }
}