import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import creationContext from '../contexts/creationContext'
import creationService from '../services/creationService'
import CreationListItem from './CreationListItem'

export default class CreationPage extends Component {
  static contextType = creationContext

  componentDidMount() {
    this.context.clearError()
    creationService.getCreation()
      .then(this.context.setCreationList)
      .catch(this.context.setError)
  }

  renderCreation() {
    const { creationList = [] } = this.context
    return creationList.map(creation =>
      <CreationListItem
        key={creation.creation_id}
        creation={creation}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <section className='CreationPage'>
        <h2>Creation Tea</h2>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderCreation()}
        <Link to={`/AddTeaForm`}><button>+</button></Link>
      </section>
    )
  }
}