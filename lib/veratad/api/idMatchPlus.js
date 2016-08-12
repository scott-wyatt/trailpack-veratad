'use strict'

module.exports = function (client) {

  const test = (target) => {
    const req = {
      method: 'POST',
      form: {
        user: client.user,
        pass: client.pass,
        service: 'DMatchPLUS5.0_en',
        traget: target
      }
    }

    if (client.test_key) {
      req.form['test_key'] = true
    }

    return client.request(req)
  }

  return test
}
