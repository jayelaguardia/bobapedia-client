import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import creationContext from '../contexts/creationContext'
import creationService from '../services/creationService'
import TokenService from '../services/token-service'

export default class CreationTeaPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = creationContext

  componentDidMount() {
    const { creationID } = this.props.match.params
    this.context.clearError()
    creationService.getCreationID(creationID)
      .then(this.context.setCreation)
      .catch(this.context.setError)
  }

  handleDelete = () => {
    creationService.deleteCreation(this.context.creation.creation_id)
    .then(() => {
      this.context.deleteCreation(this.context.creation.creation_id)
      this.props.history.push('/DIY')
    })
    .catch(this.context.setError)
  }

  renderCreation() {
    const {
      creation_user,   
      creation_name,
      creation_tea,
      creation_flavor1,	
      creation_flavor2,
      creation_addons1,	
      creation_addons2,	
      creation_milk,	
      creation_sweetener } = this.context.creation

      /**TODO: IF CREATION_USER MATCHES LOGGED IN USER, RENDER BUTTONS, ELSE DISABLED */

    return <>
      <h2>{creation_name}</h2>
      <div className='creationContents'>
        <h3 className='creationHeadings'>Ingredients:</h3>
        <ul>
          <li>{creation_tea}</li>
          <li>{creation_flavor1}</li>
          <li>{creation_flavor2}</li>
          <li>{creation_addons1}</li>
          <li>{creation_addons2}</li>
          <li>{creation_milk}</li>
          <li>{creation_sweetener}</li>
        </ul>
        <h3 className='creationHeadings'>Directions:</h3>
        <p>PLACE HOLDER TEXT</p>

        <div className='buttons'>
        <button onClick={this.handleDelete}>delete</button>
        <Link to={{
                pathname: `/UpdateTeaForm`, 
                creationID: this.context.creation.creation_id
              }}><button>update</button></Link>
        </div>

      </div>
    </>
  }

  render() {
    const { error, creation } = this.context
    let content
    if (error) {
      content = (error.error === `creationTea doesn't exist`)
        ? <p className='red'>creation not found</p>
        : <p className='red'>There was an error</p>
    } else if (!creation) {
      content = <div className='loading' />
    } else {
      content = this.renderCreation()
    }
    return (
      <section className='creationPage'>
        {content}
      </section>
    )
  }
}
