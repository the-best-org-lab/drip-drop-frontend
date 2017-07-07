'use strict'
const config = require('../config')
const store = require('../store')

// FILE ACTIONS
const folderIndex = function () {
  return $.ajax({
    url: config.apiOrigin + '/files',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

const fileIndex = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/files',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

const addFile = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/files',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data,
    contentType: false,
    processData: false
  })
}

const updateFile = function (data) {
  return $.ajax({
  // fileID to be stored locally when update modal is launched
    url: config.apiOrigin + '/files/' + store.fileId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.token
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
      Authorization: 'Token token=' + store.token
    }
  })
}

module.exports = {
  fileIndex,
  folderIndex,
  addFile,
  updateFile,
  deleteFile
}
