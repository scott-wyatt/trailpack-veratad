'use strict'

module.exports = function (client) {
  const resources = {
    ageMatch: require('./ageMatch')(client),
    idMatch: require('./idMatch')(client),
    idMatchPlus: require('./idMatchPlus')(client)
  }
  return resources
}
