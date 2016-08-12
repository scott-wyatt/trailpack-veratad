const joi = require('joi')

const schemas = require('./schemas')

module.exports = {
  validateConfig (config) {
    if (!config) {
      return Promise.reject(new TypeError('config.veratad not found'))
    }
    return new Promise((resolve, reject) => {
      joi.validate(config, schemas.veratad, (err, value) => {
        if (err) return reject(new TypeError('config.veratad: ' + err))

        return resolve(value)
      })
    })
  }
}
