'use strict'

const assert = require('assert')

describe('api.services.VeratadService', () => {
  let VeratadService
  before(() => {
    VeratadService = global.app.services.VeratadService
  })
  describe('#ageMatch', () => {
    it('should return', () => {
      return VeratadService.ageMatch({
        fn: 'Barbara',
        ln: 'Miller',
        addr: '123 Main St',
        city: 'Stratford',
        state: 'CT',
        zip: '06614',
        dob: '1974/08/21',
        dob_type: 'YYYY/MM/DD',
        ssn: '854125698'
      }, {
        test_key: 'general'
      })
      .then(res => {
        console.log(res)
        assert.equal(res.result.action, 'PASS')
      })
    })
  })
})
