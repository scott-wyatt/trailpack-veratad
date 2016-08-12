'use strict'

const joi = require('joi')

module.exports = joi.object().keys({
  host: joi.string(),
  port: joi.string(),
  path: joi.string(),
  user: joi.string(),
  pass: joi.string(),
  test_key: joi.any()
})
