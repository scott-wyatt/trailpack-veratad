'use strict'

const assert = require('assert')

describe('Trailpack', () => {
  let pack
  before(() => {
    pack = global.app.packs.veratad
  })
  it('should be loaded into the app.packs collection', () => {
    assert(pack)
  })
})
