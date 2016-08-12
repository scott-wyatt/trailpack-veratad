'use strict'

const request = require('request')
const moduleinfo = require('../../package.json')
// const _ = require('lodash')

function Client(options) {
  //Required client config
  if (!options.user || !options.pass) {
    if (process.env.VERATAD_USER && process.env.VERATAD_PASS) {
      this.user = process.env.VERATAD_USER
      this.pass = process.env.VERATAD_PASS
    }
    else {
      throw 'Client requires an User and Pass set explicitly or via the VERATAD_USER and VERATAD_PASS environment variables'
    }
  }
  else {
    //if auth token/SID passed in manually, trim spaces
    this.user = options.user.replace(/ /g, '')
    this.pass = options.pass.replace(/ /g, '')
  }

  //Optional client config
  this.host = options.host || 'https://production.idresponse.com'
  this.apiVersion = options.apiVersion || '5'
  this.timeout = options.timeout || 100000 // request timeout in milliseconds
  this.test_key = options.test_key || false

  //Set functions
  const api = require('./api')(this)
  this.api = api
  this.ageMatch = api.ageMatch
  this.idMatch = api.idMatch
  this.idMatchPlus = api.idMatchPlus
}

/**
 Get the base URL which we'll use for all requests with this client
 @returns {string} - the API base URL
 */
Client.prototype.getBaseUrl = function () {
  return 'https://' + this.host + '/process/' + this.apiVersion + '/gateway'
}

Client.prototype.request = function (options, callback) {

  // Bind Client to variable
  const client = this

  //Prepare request options
  // Add base URL
  options.url = client.getBaseUrl()

  // Set Request Headers
  options.headers = {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'User-Agent': 'trailpack-veratad/' + moduleinfo.version
  }

  // Set Request Timeout
  options.timeout = client.timeout

  request(options, function (err, response, body) {
    return new Promise((resolve, reject) => {
      let data

      try {
        if (err) {
          data = err
        }
        else {
          data = body ? JSON.parse(body) : null
        }
      }
      catch (e) {
        data = {
          status: 500,
          message: (e.message || 'Invalid JSON body')
        }
      }

      //request doesn't think 4xx is an error - we want an error for any non-2xx status codes
      let error

      if (err || (response && (response.statusCode < 200 || response.statusCode > 206))) {
        error = {}
        // response is null if server is unreachable
        if (response) {
          error.status = response.statusCode
          error.message = data ? data.message : 'Unable to complete HTTP request'
          error.code = data && data.code
          error.moreInfo = data && data.more_info
        }
        else {
          error.status = err.code
          error.message = 'Unable to reach host: "' + client.host + '"'
        }
      }
      // Resolve promise
      if (error) {
        if (typeof callback == 'function') {
          return callback(error, data)
        }
        reject(error)
      }
      else {
        if (typeof callback == 'function') {
          return callback(error, data)
        }
        resolve(data)
      }
    })
  })
}

module.exports = Client
