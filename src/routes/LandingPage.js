import React, { Component } from 'react'
import classicContext from '../contexts/classicContext'
import classicService from '../services/classicService'
import ClassicListItem from './ClassicListItem'

export default class LandingPage extends Component {
  static contextType = classicContext

  componentDidMount() {
    this.context.clearError()
    classicService.getClassic()
      .then(this.context.setClassicList)
      .catch(this.context.setError)
  }

  renderClassic() {
    const { classicList = [] } = this.context
    return classicList.map(classic =>
      <ClassicListItem
        key={classic.classic_id}
        classic={classic}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <section className='LandingPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderClassic()}
      </section>
    )
  }
}