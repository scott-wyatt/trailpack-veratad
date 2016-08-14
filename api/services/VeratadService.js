'use strict'

const Service = require('trails-service')
const joi = require('joi')
const lib = require('../../lib')
const Veratad = lib.Veratad
const _ = require('lodash')

/**
 * @module VeratadService
 * @description Veratad service for sending authenticating identity of users
 */
module.exports = class VeratadService extends Service {
  /**
   * Check Age Match 5.0
   * @param {Object} target the details of the search
   * @param {Object} options the options of the search
   */

  ageMatch(target, options) {
    return new Promise((resolve, reject) => {
      const config = _.defaults(this.app.config.veratad, options)
      const client = new Veratad(config)

      const schema = joi.object().keys({
        fn: joi.string().required(),
        ln: joi.string().required(),
        addr: joi.string(),
        city: joi.string(),
        state: joi.string(),
        zip: joi.string().alphanum().min(3).max(15),
        dob: joi.any(),
        dob_type: joi.string(),
        age: joi.string(),
        ssn: joi.string().alphanum().min(4).max(10)
      }).unknown()

      joi.validate(target, schema, (err, value) => {
        if (err) {
          return reject(err)
        }

        client.ageMatch.test(target, (err, response) => {
          if (err) {
            return reject(err)
          }
          return resolve(response)
        })
      })
    })
  }

  /**
   * Check IDMAtch
   * @param {Object} target the details of the search
   * @param {Object} options the options of the search
   */
  idMatch(target, options) {
    return new Promise((resolve, reject) => {
      const config = _.defaults(this.app.config.veratad, options)
      const client = new Veratad(config)

      const schema = joi.object().keys({
        fn: joi.string().required(),
        ln: joi.string().required(),
        addr: joi.string(),
        city: joi.string(),
        state: joi.string(),
        zip: joi.string().alphanum().min(3).max(15),
        dob: joi.any(),
        dob_type: joi.string(),
        ssn: joi.string().alphanum().min(4).max(10)
      }).unknown()

      joi.validate(target, schema, (err, value) => {
        if (err) {
          return reject(err)
        }

        client.idMatch.test(target, (err, response) => {
          if (err) {
            return reject(err)
          }
          return resolve(response)
        })
      })
    })
  }

  /**
   * Check IDMAtchPlus 5.0
   * @param {Object} target the details of the search
   * @param {Object} options the options of the search
   */
  idMatchPlus(target, options) {
    return new Promise((resolve, reject) => {
      const config = _.defaults(this.app.config.veratad, options)
      const client = new Veratad(config)

      const schema = joi.object().keys({
        fn: joi.string().required(),
        ln: joi.string().required(),
        addr: joi.string(),
        city: joi.string(),
        state: joi.string(),
        zip: joi.string().alphanum().min(3).max(15),
        dob: joi.any(),
        dob_type: joi.string(),
        ssn: joi.string().alphanum().min(4).max(10)
      }).unknown()

      joi.validate(target, schema, (err, value) => {
        if (err) {
          return reject(err)
        }

        client.idMatchPlus.test(target, (err, response) => {
          if (err) {
            return reject(err)
          }
          return resolve(response)
        })
      })
    })
  }
}
