'use strict'
const config = require('../config')
const store = require('../store')

// FILE ACTIONS
const fileIndex = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/files',
    method: 'GET'
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
  fileIndex,
  addFile,
  updateFile,
  deleteFile
}
