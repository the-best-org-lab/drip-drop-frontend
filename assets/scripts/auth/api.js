'use strict'

const config = require('../config')
const store = require('../store')
// const game = require('../game/gameEngine')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
    .then((response) => {
      store.id = response.user.id
      store.email = response.user.email
      store.token = response.user.token
    })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.id,
    method: 'PATCH',
    // header: 'Authorization: Token token=' + store.userToken,
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
