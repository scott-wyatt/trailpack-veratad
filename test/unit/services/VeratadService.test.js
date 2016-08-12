'use strict'
/* global describe, it */
const assert = require('assert')

describe('VeratadService', () => {
  it('should exist', () => {
    assert(global.app.api.services['VeratadService'])
    assert(global.app.services['VeratadService'])
    assert(global.app.services['VeratadService'].ageMatch)
    assert(global.app.services['VeratadService'].idMatch)
    assert(global.app.services['VeratadService'].idMatchPlus)
  })
})
