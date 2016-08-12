'use strict'

const Service = require('trails-service')

// const _ = require('lodash')

/**
 * @module VeratadService
 * @description Veratad service for sending authenticating identity of users
 */
module.exports = class VeratadService extends Service {
  /**
   * Check Age Match 5.0
   * @param {Object} body the details of the search
   * @param {Object} options the options of the search
   */
  // {
  //   "user": "ws@company.com",
  //   "pass": "xxxxxxxxxx",
  //   "service": "AgeMatch5.0",
  //   "reference": "123456",
  //   "target": {
  //     "fn": "JOHN",
  //     "ln": "WHO",
  //     "addr": "245 MAIN ST APT 54", "city": "ANYTOWN",
  //     "state": "NJ",
  //     "zip": "12346",
  //     "dob": "19870621",
  //     "age": "21+",
  //     "dob_type": "YYYYMMDD",
  //     "ssn": "123456789"
  //   }
  // }

  ageMatch(body, options) {

  }

  /**
   * Check IDMAtch
   * @param {Object} body the details of the search
   * @param {Object} options the options of the search
   */
  idMatch(body, options) {

  }

  /**
   * Check IDMAtchPlus 5.0
   * @param {Object} body the details of the search
   * @param {Object} options the options of the search
   */
  idMatchPlus(body, options) {

  }
}
