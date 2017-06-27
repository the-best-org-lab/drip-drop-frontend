'use strict'

// Requires
const fileapi = require('./api')
const fileevents = require('./events')
const store = require('../store')
const getFormFields = require(`../../../lib/get-form-fields`)

// File UI events
const showFoldersTemplate = require('../templates/folder-listing.handlebars')
const showFilesTemplate = require('../templates/file-listing.handlebars')

const reloadFileList = function () {
  fileapi.fileIndex()
    .then(fileIndexSuccess)
    .catch(fileIndexFailure)
}

// folder index
const folderIndexSuccess = (response) => {
}
const folderIndexFailure = (error) => {
}

// file index
const fileIndexSuccess = (response) => {
}
const fileIndexFailure = (error) => {
}

// add file
const addFileSuccess = (response) => {
}
const addFileFailure = (error) => {
}

// update file
const updateFileSuccess = (response) => {
}
const updateFileFailure = (error) => {
}

// delete file
const deleteFileSuccess = (response) => {
}
const deleteFileFailure = (error) => {
}

module.exports = {
  fileIndexSuccess,
  fileIndexFailure,
  folderIndexSuccess,
  folderIndexFailure,
  addFileSuccess,
  addFileFailure,
  updateFileSuccess,
  updateFileFailure,
  deleteFileSuccess,
  deleteFileFailure
}
