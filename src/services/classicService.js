import config from '../config'

const classicService = {
  getClassic() {
    return fetch(`${config.API_ENDPOINT}/classic`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getClassicID(classic_id) {
    return fetch(`${config.API_ENDPOINT}/classic/${classic_id}`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default classicService 