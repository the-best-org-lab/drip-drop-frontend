'use strict'

// Requires
const fileApi = require('./api')
const fileEvents = require('./events')
const store = require('../store')
const getFormFields = require(`../../../lib/get-form-fields`)
const _ = require('lodash')

// File UI events
const foldersTemplate = require('../templates/folder-listing.handlebars')
const filesTemplate = require('../templates/file-listing.handlebars')

const reloadFileList = function () {
  fileApi.fileIndex()
    .then(fileIndexSuccess)
    .catch(fileIndexFailure)
}

// folder index

const filterByName = function (files) {
  let f = []
  return files.filter(function (file) {
    return f.indexOf(file.folder) === -1 && f.push(file.folder)
  })
}

const folderIndexSuccess = (response) => {
  // $('.folder-list').empty()
  const data = filterByName(response.files)
  let showFoldersHtml = foldersTemplate({ files: data })
  $('.folder-list').append(showFoldersHtml)
  $('.open-folder').on('click', openFolder)
}

const folderIndexFailure = (error) => {
}

const openFolder = function () {
  store.folder = $(event.target).data('type')
  console.log('store folder is ', store.folder)
  $('.folder-list-container').toggle('display')
  $('.files-list-container').toggle('display')
  fileApi.fileIndex()
    .then(fileIndexSuccess)
    .catch(fileIndexFailure)
}
// file index
const filterByFolder = function (files) {
  return files.filter(function (file) {
    return file.folder === store.folder
  })
}

const openFolderTable = function () {
  $('.folder-list-container').toggle('display')
  $('.files-list-container').toggle('display')
}

const openAddModal = function (event) {
  console.log('open add folder ', store.folder)
  $('.folder-add').val(store.folder)
}

const openEditModal = function (event) {
  store.fileName = $(event.target).parent().data('type')
  store.fileId = $(event.target).parent().data('id')
  console.log($(event.target).parent())
  console.log('fileName is ', store.fileName)
  console.log('folder name is ', store.folder)
  console.log('file id is ', store.fileId)
  $('.modal-folder-name').text(`Folder: ${store.folder}`)
  $('.modal-file-name').text(`File: ${store.fileName}`)

}

const fileIndexSuccess = (response) => {
  $('.file-list').empty()
  console.log('response.files is ', response.files)
  const data = filterByFolder(response.files)
  console.log('filtered is ', data)
  let showFilesHtml = filesTemplate({ files: data })
  $('.file-list').append(showFilesHtml)
  // $('.open-file-open').on('click', openFile)
  // $('.open-file-download').on('click', downloadFile)
  $('.open-file-edit').on('click', openEditModal)
  $('.open-file-delete').on('click', openDeleteModal)
  $('.open-add-file').on('click', openAddModal)
  $('.files-table-title').text(store.folder)

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
const openDeleteModal = function (event) {
  console.log($(event.target).parent())
  store.fileId = $(event.target).parent().data('id')
  console.log('delete store fileid ', store.fileId)
}

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
  deleteFileFailure,
  openFolderTable
}
