import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import creationContext from '../contexts/creationContext'
import creationService from '../services/creationService'

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
      creation_name,
      creation_tea,
      creation_flavor1,	
      creation_flavor2,
      creation_addons1,	
      creation_addons2,	
      creation_milk,	
      creation_sweetener } = this.context.creation
    return <>
      <div className='creationContents'>
        <Link to={`/`}><button>Home</button></Link>
        <Link to={`/DIY`}><button>DIY</button></Link>
        <h2>{creation_name}</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>{creation_tea}</li>
          <li>{creation_flavor1}</li>
          <li>{creation_flavor2}</li>
          <li>{creation_addons1}</li>
          <li>{creation_addons2}</li>
          <li>{creation_milk}</li>
          <li>{creation_sweetener}</li>
        </ul>
        <h3>Directions:</h3>
        <p>PLACE HOLDER TEXT</p>
        <button onClick={this.handleDelete}>delete</button>
        <Link to={`/UpdateTeaForm`}><button>update</button></Link>
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
