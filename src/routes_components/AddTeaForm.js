import React, { Component } from 'react'
import config from '../config'
import creationContext from '../contexts/creationContext'
import creationService from '../services/creationService'

export default class AddTeaForm extends Component {
  static contextType = creationContext

  state = {
    tea: [],
    flavor: [],
    addons: [],
    milk: [],
    sweetener: []
  };

  componentDidMount() {
      Promise.all([
          fetch(`${config.API_ENDPOINT}/tea`),
          fetch(`${config.API_ENDPOINT}/flavor`),
          fetch(`${config.API_ENDPOINT}/addons`),
          fetch(`${config.API_ENDPOINT}/milk`),
          fetch(`${config.API_ENDPOINT}/sweetener`)
      ])
          .then(([teaRes, flavorRes, addonsRes, milkRes, sweetenerRes]) => {
              if (!teaRes.ok)
                  return teaRes.json().then(e => Promise.reject(e));
              if (!flavorRes.ok)
                  return flavorRes.json().then(e => Promise.reject(e));
              if (!addonsRes.ok)
                  return addonsRes.json().then(e => Promise.reject(e));
              if (!milkRes.ok)
                  return milkRes.json().then(e => Promise.reject(e));
              if (!sweetenerRes.ok)
                  return sweetenerRes.json().then(e => Promise.reject(e));

              return Promise.all([teaRes.json(), flavorRes.json(), addonsRes.json(), milkRes.json(), sweetenerRes.json()]);
          })
          .then(([teaJson, flavorJson, addonsJson, milkJson, sweetenerJson]) => {
            let length1 = Object.values(teaJson.rows[0].enum_range).length
            let teaArray = Object.values(teaJson.rows[0].enum_range).splice(1, length1-2).filter(char => char !== "\"").join('').split(',').sort()
            let length2 = Object.values(flavorJson.rows[0].enum_range).length
            let flavorArray = Object.values(flavorJson.rows[0].enum_range).splice(1, length2-2).filter(char => char !== "\"").join('').split(',').sort()
            flavorArray.unshift(null)
            let length3 = Object.values(addonsJson.rows[0].enum_range).length
            let addonsArray = Object.values(addonsJson.rows[0].enum_range).splice(1, length3-2).filter(char => char !== "\"").join('').split(',').sort()
            addonsArray.unshift(null)
            let length4 = Object.values(milkJson.rows[0].enum_range).length
            let milkArray = Object.values(milkJson.rows[0].enum_range).splice(1, length4-2).filter(char => char !== "\"").join('').split(',').sort()
            milkArray.unshift(null)
            let length5 = Object.values(sweetenerJson.rows[0].enum_range).length
            let sweetenerArray = Object.values(sweetenerJson.rows[0].enum_range).splice(1, length5-2).filter(char => char !== "\"").join('').split(',').sort()
            sweetenerArray.unshift(null)
            return ([teaArray, flavorArray, addonsArray, milkArray, sweetenerArray])
          })
          .then(([tea, flavor, addons, milk, sweetener]) => {
              this.setState({tea, flavor, addons, milk, sweetener});
          })
          .catch(this.context.setError)
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, tea, flavor1, flavor2, addons1, addons2, milk, sweetener } = e.target
    const creation = {
      creation_name: name.value,
      creation_tea: tea.value,
      creation_flavor1: flavor1.value,
      creation_flavor2: flavor2.value,
      creation_addons1: addons1.value,
      creation_addons2: addons2.value,
      creation_milk: milk.value,
      creation_sweetener: sweetener.value,
    }
    
    const arrayKeys = Object.keys(creation)

    for(let i = 2; i < arrayKeys.length; i++) {
      if(creation[arrayKeys[i]] === "" || creation[arrayKeys[i]] === "0") {
        creation[arrayKeys[i]] = null
      }
    }

    creationService.postCreation(creation)
      .then(this.context.addCreation)
      .then(() => {
        name.value = ''
        this.props.history.push('/creation')
      })
      .catch(this.context.setError)
  }

  handleCancel = () => {
    this.props.history.push('/creation')
  }

  teaSelect = array => {
    return array.map((option, index) => {
      return <option key={index} value={index+1}> {option}</option>
    })
  }

  addonsSelect = array => {
    return array.map((option, index) => {
      return <option key={index} value={index}> {option}</option>
    })
  }

  theOtherThree = array => {
    return array.map((option, index) => {
      return <option key={index} value={option}> {option}</option>
    })
  }

  render() {
    return (
      <>
      <h2>Add Form</h2>
      <form
        className='AddTeaForm'
        onSubmit={this.handleSubmit}
      >
        
        <div className='input'>
            <label htmlFor='name'>
              Name this creation:
            </label>
            <br />
            <input
              type='text'
              name='name'
              id='name'
              required
            />
        </div>

        <div className='select'>
          <label htmlFor='tea'>Pick your tea base:</label>
          <br />
          <select
            required
            aria-label='Pick your tea base'
            name='tea'
            id='tea'
            defaultValue='1'
          >
          { this.teaSelect(this.state.tea) }
          </select>
        </div>

        <div className='select'>
          <label htmlFor='flavor1'>Pick your first flavor:</label>
          <br />
          <select
            aria-label='Pick your first flavor'
            name='flavor1'
            id='flavor1'
          >
          {this.theOtherThree(this.state.flavor)}
          </select>
        </div>

        <div className='select'>
          <label htmlFor='flavor2'>Pick your second flavor:</label>
          <br />
          <select
            aria-label='Pick your second flavor'
            name='flavor2'
            id='flavor2'
          >
          {this.theOtherThree(this.state.flavor)}
          </select>
        </div>

        <div className='select'>
          <label htmlFor='addons1'>Pick your first topping:</label>
          <br />
          <select
            aria-label='Pick your first topping'
            name='addons1'
            id='addons1'
          >
          {this.addonsSelect(this.state.addons)}
          </select>
        </div>

        <div className='select'>
          <label htmlFor='addons2'>Pick your second topping:</label>
          <br />
          <select
            aria-label='Pick your second topping'
            name='addons2'
            id='addons2'
          >
          {this.addonsSelect(this.state.addons)}
          </select>
        </div>

        <div className='select'>
          <label htmlFor='milk'>Pick your milk option:</label>
          <br />
          <select
            aria-label='Pick your milk option'
            name='milk'
            id='milk'
          >
          {this.theOtherThree(this.state.milk)}
          </select>
        </div>

        <div className='select'>
          <label htmlFor='sweetener'>Pick your sweetener option:</label>
          <br />
          <select
            aria-label='Pick your sweetener option'
            name='sweetener'
            id='sweetener'
          >
          {this.theOtherThree(this.state.sweetener)}
          </select>
        </div>

        <div className='buttons'>
          <button type='submit'>
            Submit
          </button>
          <button onClick = {this.handleCancel}>
            Cancel
          </button>
        </div>

      </form>
      </>
    )
  }
}





