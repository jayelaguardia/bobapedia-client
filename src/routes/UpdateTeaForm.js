import React, { Component } from 'react'
import creationContext from '../contexts/creationContext'
import creationService from '../services/creationService'

export default class UpdateTeaForm extends Component {
  static contextType = creationContext

  handleSubmit = e => {
    e.preventDefault()
    const { name, tea, flavor1, flavor2, addons1, addons2, milk, sweetener } = e.target
    const creation = {
      creation_user: 1,
      creation_id: this.context.creation.creation_id,
      creation_name: name.value,
      creation_tea: tea.value,
      creation_flavor1: flavor1.value,
      creation_flavor2: flavor2.value,
      creation_addons1: addons1.value,
      creation_addons2: addons2.value,
      creation_milk: milk.value,
      creation_sweetener: sweetener.value,
    }

    creationService.updateCreation(creation)
      .then(this.context.updateCreation(creation))
      .then(() => {
        name.value = ''
        this.props.history.push(`/creation/${this.context.creation.creation_id}`)
      })
      .catch(this.context.setError)
  }

  handleCancel = () => {
    this.props.history.push(`/creation/${this.context.creation.creation_id}`)
  }

  teaAndAdd = array => {
    return array.map((option, index) => {
      return <option key={index} value={index+1}> {option}</option>
    })
  }

  theOtherThree = array => {
    return array.map((option, index) => {
      return <option key={index} value={option}> {option}</option>
    })
  }
  
  render() {
    const tea = ['green tea', 'black tea', 'thai tea', 'chai tea', 'oolong tea', 'milk tea', 'earl grey tea']
    const flavor = ['wintermelon', 'peach', 'honeydew', 'rose', 'green apple', 'guava', 'lemon', 'lychee', 'mango', 'passion        fruit', 'pineapple', 'strawberry', 'taro', 'chocolate', 'caramel', 'black sesame', 'lavender', 'hazelnut', 'pumpkin spice', 'kiwi', 'cherry', 'blueberry', 'watermelon', 'pomegranate', 'raspberry', 'coffee', 'matcha', null]
    const addons = ['boba', 'crystal boba', 'egg pudding', 'aloe vera', 'rainbow jelly', 'red bean', 'vanilla ice cream', 'cheese foam', 'whipped cream', 'grass jelly', 'crystal jelly', 'almond pudding', 'popping boba', 'strawberry bits', 'peach bits', 'pineapple bits', null]
    const milk = [  'fresh milk', 'oat milk', 'soy milk', 'almond milk', 'coconut milk', null]
    const sweetener = [  'simple syrup', 'honey', 'condensed milk', 'brown sugar syrup', null]
    
    return (
      <form
        className='UpdateTeaForm'
        onSubmit={this.handleSubmit}
      >
        <div className='input'>
            <label htmlFor='name'>
              Name this creation:
              {' '}
            </label>
            <input
              type='text'
              name='name'
              id='name'
              defaultValue= {this.context.creation.creation_name}
              required
            />
        </div>

        <div className='select'>
          <label htmlFor='tea'>Pick your tea base:</label>
          <select
            required
            aria-label='Pick your tea base'
            name='tea'
            id='tea'
            defaultValue = {this.context.creation.creation_tea}
          >
          { this.teaAndAdd(tea) }
          </select>
        </div>

        <div className='select'>
          <label htmlFor='flavor1'>Pick your first flavor:</label>
          <select
            aria-label='Pick your first flavor'
            name='flavor1'
            id='flavor1'
            defaultValue = {this.context.creation.creation_flavor1}
          >
          {this.theOtherThree(flavor)}
          </select>
        </div>

        <div className='select'>
          <label htmlFor='flavor2'>Pick your second flavor:</label>
          <select
            aria-label='Pick your second flavor'
            name='flavor2'
            id='flavor2'
            defaultValue = {this.context.creation.creation_flavor2}
          >
          {this.theOtherThree(flavor)}
          </select>
        </div>

        <div className='select'>
          <label htmlFor='addons1'>Pick your first topping:</label>
          <select
            aria-label='Pick your first topping'
            name='addons1'
            id='addons1'
            defaultValue = {this.context.creation.creation_addons1}
          >
          {this.teaAndAdd(addons)}
          </select>
        </div>

        <div className='select'>
          <label htmlFor='addons2'>Pick your second topping:</label>
          <select
            aria-label='Pick your second topping'
            name='addons2'
            id='addons2'
            defaultValue = {this.context.creation.creation_addons2}
          >
          {this.teaAndAdd(addons)}
          </select>
        </div>

        <div className='select'>
          <label htmlFor='milk'>Pick your milk option:</label>
          <select
            aria-label='Pick your milk option'
            name='milk'
            id='milk'
            defaultValue = {this.context.creation.creation_milk}
          >
          {this.theOtherThree(milk)}
          </select>
        </div>

        <div className='select'>
          <label htmlFor='sweetener'>Pick your sweetener option:</label>
          <select
            aria-label='Pick your sweetener option'
            name='sweetener'
            id='sweetener'
            defaultValue = {this.context.creation.creation_sweetener}
          >
          {this.theOtherThree(sweetener)}
          </select>
        </div>

        <button type='submit'>
          Submit
        </button>
        <button onClick = {this.handleCancel}>
          Cancel
        </button>
      </form>
    )
  }
}





