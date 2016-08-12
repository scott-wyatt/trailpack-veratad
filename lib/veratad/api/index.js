'use strict'

module.exports = function (client) {
  const api = {
    ageMatch: require('./ageMatch')(client),
    idMatch: require('./idMatch')(client),
    idMatchPlus: require('./idMatchPlus')(client)
  }
  return api
}
