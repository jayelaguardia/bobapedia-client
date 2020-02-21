import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ClassicListItem extends Component {
  render() {
    const { classic } = this.props

    return (
      <Link to={`/classic/${classic.classic_id}`}>
        <div className='classicListItem'>
          <h3 className='classicListItem__heading'>{classic.classic_name}</h3>
        </div>
      </Link>
    )
  }
}
