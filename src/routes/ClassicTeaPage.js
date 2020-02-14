import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classicContext from '../contexts/classicContext'
import classicService from '../services/classicService'

export default class ClassicTeaPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = classicContext

  componentDidMount() {
    const { classicID } = this.props.match.params
    this.context.clearError()
    classicService.getClassicID(classicID)
      .then(this.context.setClassic)
      .catch(this.context.setError)
  }

  renderClassic() {
    const {   
      classic_name,
      classic_tea,
      classic_flavor1,	
      classic_flavor2,
      classic_addons1,	
      classic_addons2,	
      classic_milk,	
      classic_sweetener } = this.context.classic
    return <>
      <div className='classicContents'>
        <Link to={`/`}><button>Home</button></Link>
        <Link to={`/DIY`}><button>DIY</button></Link>
        <h2>{classic_name}</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>{classic_tea}</li>
          <li>{classic_flavor1}</li>
          <li>{classic_flavor2}</li>
          <li>{classic_addons1}</li>
          <li>{classic_addons2}</li>
          <li>{classic_milk}</li>
          <li>{classic_sweetener}</li>
        </ul>
        <h3>Directions:</h3>
        <p>PLACE HOLDER TEXT</p>
      </div>
    </>
  }

  render() {
    const { error, classic } = this.context
    let content
    if (error) {
      content = (error.error === `classicTea doesn't exist`)
        ? <p className='red'>classic not found</p>
        : <p className='red'>There was an error</p>
    } else if (!classic) {
      content = <div className='loading' />
    } else {
      content = this.renderClassic()
    }
    return (
      <section className='classicPage'>
        {content}
      </section>
    )
  }
}
