import config from '../config'

const creationService = {
  getCreation() {
    return fetch(`${config.API_ENDPOINT}/creation`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getCreationID(creation_id) {
    return fetch(`${config.API_ENDPOINT}/creation/${creation_id}`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postCreation(creation) {
    return fetch(`${config.API_ENDPOINT}/creation`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        "creation_user": 1,
        "creation_name": creation.creation_name,
        "creation_tea": creation.creation_tea,
        "creation_flavor1": creation.creation_flavor1,
        "creation_flavor2": creation.creation_flavor2,
        "creation_addons1": creation.creation_addons1,
        "creation_addons2": creation.creation_addons2,
        "creation_milk": creation.creation_milk,
        "creation_sweetener": creation.creation_sweetener,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteCreation(creation_id) {
    return fetch(`${config.API_ENDPOINT}/creation/${creation_id}`, {
      method: 'DELETE'
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res
    )
  },
  updateCreation(creation) {
    return fetch(`${config.API_ENDPOINT}/creation/${creation.creation_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        "creation_user": 1,
        "creation_name": creation.creation_name,
        "creation_tea": creation.creation_tea,
        "creation_flavor1": creation.creation_flavor1,
        "creation_flavor2": creation.creation_flavor2,
        "creation_addons1": creation.creation_addons1,
        "creation_addons2": creation.creation_addons2,
        "creation_milk": creation.creation_milk,
        "creation_sweetener": creation.creation_sweetener,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res
      )
  }
}

export default creationService 