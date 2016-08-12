'use strict'

const joi = require('joi')

module.exports = joi.object().keys({
  host: joi.string().required(),
  user: joi.string().required(),
  pass: joi.string().required(),
  test_key: joi.boolean()
})
