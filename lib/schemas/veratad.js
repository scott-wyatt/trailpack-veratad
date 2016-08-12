const joi = require('joi')

module.exports = joi.object().keys({
  key: joi.string().required(),
  test_key: joi.boolean()
})
