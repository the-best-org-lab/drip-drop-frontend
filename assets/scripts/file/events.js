'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const fileapi = require('./api')
const fileui = require('./ui')
const store = require('../store')

// File events
const onIndexFolder = function () {
  // event.preventDefault()
  // const data = getFormFields(event.target)
  fileapi.folderIndex()
    .then(fileui.indexFolderSuccess)
    .catch(fileui.indexFolderFailure)
}

const onIndexFile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  fileapi.fileIndex(data)
    .then(fileui.indexFileSuccess)
    .catch(fileui.indexFileFailure)
}

const onAddFile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  fileapi.addFile(data)
    .then(fileui.addFileSuccess)
    .catch(fileui.addFileFailure)
}

const onUpdateFile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  fileapi.updateFile(data)
    .then(fileui.updateFileSuccess)
    .catch(fileui.updateFileFailure)
}

const onDeleteFile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  fileapi.deleteFile(data)
    .then(fileui.deleteFileSuccess)
    .catch(fileui.deleteFileFailure)
}

const addHandlers = () => {
}

module.exports = {
  addHandlers,
  onIndexFolder
}
