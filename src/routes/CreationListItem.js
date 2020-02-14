import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CreationListItem extends Component {
  render() {
    const { creation } = this.props

    return (
      <Link to={`/creation/${creation.creation_id}`}>
        <div className='creationListItem'>
          <h2 className='creationListItem__heading'>{creation.creation_name}</h2>
        </div>
      </Link>
    )
  }
}
