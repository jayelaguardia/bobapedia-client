import React, { Component } from 'react'
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
      <h2>{classic_name}</h2>
      <div className='classicContents'>
        <h3 className='classicHeadings'>Ingredients:</h3>
        <ul>
          <li>{classic_tea}</li>
          <li>{classic_flavor1}</li>
          <li>{classic_flavor2}</li>
          <li>{classic_addons1}</li>
          <li>{classic_addons2}</li>
          <li>{classic_milk}</li>
          <li>{classic_sweetener}</li>
        </ul>
        <h3 className='classicHeadings'>Directions:</h3>
        
        <p>Pour 10oz {classic_tea} into a shaker.</p>
        {(classic_sweetener !== null) ? <p>Add 2 pumps of {classic_sweetener}</p> : <p className='disabled'></p>}
        {(classic_flavor1 !== null) ? <p>Add 1 pump of {classic_flavor1}</p> : <p className='disabled'></p>}
        {(classic_flavor2 !== null) ? <p>Add 1 pump of {classic_flavor2}</p> : <p className='disabled'></p>}
        {(classic_milk !== null) ? <p>Add 2oz of {classic_milk}</p> : <p className='disabled'></p>}
        <p>Add 2oz of ice cubes. Cap the shaker and shake until well blended. Set aside</p>
        <p>Grab your favorite tall glass and straw</p>
        {(classic_addons1 !== null) ? <p>Pour 2oz of {classic_addons1}</p> : <p className='disabled'></p>}
        {(classic_addons2 !== null) ? <p>Pour 2oz of {classic_addons2}</p> : <p className='disabled'></p>}
        <p>Pour in the blended tea</p>
        <p>Top with more ice and add your straw</p>
        <p>And now it's done~</p>
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
