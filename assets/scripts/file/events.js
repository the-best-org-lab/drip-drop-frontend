'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const fileApi = require('./api')
const fileUi = require('./ui')
const store = require('../store')

// File events
const onIndexFolder = function () {
  // event.preventDefault()
  // const data = getFormFields(event.target)
  fileApi.folderIndex()
    .then(fileUi.folderIndexSuccess)
    .catch(fileUi.folderIndexFailure)
}

const onIndexFile = function () {
  // event.preventDefault()
  // const data = getFormFields(event.target)
  fileApi.fileIndex()
    .then(fileUi.indexFileSuccess)
    .catch(fileUi.indexFileFailure)
}

const onAddFile = function (event) {
  event.preventDefault()
  const data = new FormData(event.target)
  for (let pair of data.entries()) {
    console.log(pair[0], pair[1], pair[2])
  }
  fileApi.addFile(data)
    .then(fileUi.addFileSuccess)
    .catch(fileUi.addFileFailure)
}

const onUpdateFile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('update file data is ', data)
  fileApi.updateFile(data)
    .then(fileUi.updateFileSuccess)
    .catch(fileUi.updateFileFailure)
}

const onDeleteFile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  fileApi.deleteFile(data)
    .then(fileUi.deleteFileSuccess)
    .catch(fileUi.deleteFileFailure)
}

const addHandlers = () => {
  $('#add-file').on('submit', onAddFile)
  $('#delete-file').on('click', onDeleteFile)
  $('#update-file').on('submit', onUpdateFile)
  $('.open-folder-table').on('click', fileUi.openFolderTable)
}

module.exports = {
  addHandlers,
  onIndexFolder,
  onIndexFile
}
