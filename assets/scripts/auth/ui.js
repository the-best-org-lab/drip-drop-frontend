'use strict'

const fileEvents = require('../file/events.js')

const signUpSuccess = (data) => {
  $('#sign-up-close').click()
  $('#sign-up-modal').trigger('reset')
}

const signUpFailure = (error) => {
  $('#sign-up-close').click()
  $('#sign-up-btn').prop('disabled', false)
  $('div#statusBar').text('Sign Up failed. Status returned by the server: ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
  $('#sign-up-modal').trigger('reset')
}

const signInSuccess = (data) => {
  $('#sign-in-close').click()   // close sign-in modal
  $('#change-password-btn').prop('disabled', false)
  $('#sign-out-btn').prop('disabled', false)
  $('#sign-up-btn').prop('disabled', true)
  $('#sign-in-btn').prop('disabled', true)
  $('#sign-in-modal').trigger('reset')
  fileEvents.onIndexFolder()
  $('.folder-list-container').toggle('display')
  $('#sign-up-btn').toggle('display')
  $('#sign-in-btn').toggle('display')
  $('#sign-out-btn').toggle('display')
  $('#change-password-btn').toggle('display')
}

const signInFailure = (error) => {
  $('#sign-in-close').click()   // close sign-in modal dlg
  $('#sign-up-btn').prop('disabled', false)
  $('div#statusBar').text('Sign In failed. Status returned by the server: ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
  $('#sign-in-modal').trigger('reset')
}

const changePasswordSuccess = (data) => {
  $('#change-password-close').click() // close change password modal dlg
  $('div#statusBar').text('Your password was successfully changed.')
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
  $('#change-password-modal').trigger('reset')
}

const changePasswordFailure = (error) => {
  $('#change-password-close').click() // close change password modal dlg
  $('div#statusBar').text('Change Password failed. Status returned by the server: ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
  $('#change-password-modal').trigger('reset')
}

const signOutSuccess = () => {
  $('#sign-out-close').click()   // close sign-out modal dlg
  $('#change-password-btn').prop('disabled', true)
  $('#sign-out-btn').prop('disabled', true)
  $('#sign-up-btn').prop('disabled', false)
  $('#sign-in-btn').prop('disabled', false)
  $('#sign-out-modal').trigger('reset')
  $('.folder-list-container').hide()
  $('.files-list-container').hide()
  $('.file-list').empty()
  $('.folder-list').empty()
  $('#sign-up-btn').toggle('display')
  $('#sign-in-btn').toggle('display')
  $('#sign-out-btn').toggle('display')
  $('#change-password-btn').toggle('display')
}

const signOutFailure = (error) => {
  $('#sign-out-close').click()  // close sign-out modal dlg
  $('div#statusBar').text('Sign Out failed. Status returned by the server: ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
  $('#sign-out-modal').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess
}
