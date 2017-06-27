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

// FILE ACTIONS
const fileIndex = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/files',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
}

const addFile = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/files',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
}

const updateFile = function (data) {
  return $.ajax({
  // fileID to be stored locally when update modal is launched
    url: config.apiOrigin + '/files/' + store.fileId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
}

const deleteFile = function () {
  return $.ajax({
    // fileID to be stored locally when delete modal is launched
    url: config.apiOrigin + '/files/' + store.fileId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  fileIndex,
  addFile,
  updateFile,
  deleteFile
}
