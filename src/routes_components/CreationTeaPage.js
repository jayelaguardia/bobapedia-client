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
      this.props.history.push('/creation')
    })
    .catch(this.context.setError)
  }

  jwtDecode = t => {
    let token = {}
    token.raw = t;
    token.header = JSON.parse(window.atob(t.split('.')[0]));
    token.payload = JSON.parse(window.atob(t.split('.')[1]));
    return token;
  }

  checkIfOwn = () => {
    const authToken = TokenService.getAuthToken()
    if (!authToken) {
      return null
    }
    else {
      const user_id = this.jwtDecode(authToken).payload.user_id;
      if(this.context.creation.creation_user === user_id) {
        return (        
          <div className='buttons'>
          <button onClick={this.handleDelete}>delete</button>
          <Link to={{
                  pathname: `/UpdateTeaForm`, 
                  creationID: this.context.creation.creation_id
                }}><button>update</button></Link>
          </div>)

      }
      else return null
    }
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
        
        <p>Pour 10oz {creation_tea} into a shaker.</p>
        {(creation_sweetener !== null) ? <p>Add 2 pumps of {creation_sweetener}</p> : <p className='disabled'></p>}
        {(creation_flavor1 !== null) ? <p>Add 1 pump of {creation_flavor1}</p> : <p className='disabled'></p>}
        {(creation_flavor2 !== null) ? <p>Add 1 pump of {creation_flavor2}</p> : <p className='disabled'></p>}
        {(creation_milk !== null) ? <p>Add 2oz of {creation_milk}</p> : <p className='disabled'></p>}
        <p>Add 2oz of ice cubes. Cap the shaker and shake until well blended. Set aside</p>
        <p>Grab your favorite tall glass and straw</p>
        {(creation_addons1 !== null) ? <p>Pour 2oz of {creation_addons1}</p> : <p className='disabled'></p>}
        {(creation_addons2 !== null) ? <p>Pour 2oz of {creation_addons2}</p> : <p className='disabled'></p>}
        <p>Pour in the blended tea</p>
        <p>Top with more ice and add your straw</p>
        <p>And now it's done~</p>

        {this.checkIfOwn()}

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
