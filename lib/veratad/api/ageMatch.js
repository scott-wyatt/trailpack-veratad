'use strict'

module.exports = function (client) {

  const test = (target, cb) => {
    const req = {
      method: 'POST',
      body: {
        user: client.user,
        pass: client.pass,
        service: 'AgeMatch5.0',
        target: target
      }
    }

    if (client.test_key) {
      req.body.target['test_key'] = client.test_key
    }

    client.request(req, cb)
  }

  return {test: test}
}
