'use strict'

const signUpSuccess = (data) => {
  $('#sign-up-close').click()
}

const signUpFailure = (error) => {
  $('#sign-up-close').click()
  $('#sign-up-btn').prop('disabled', false)
  $('div#statusBar').text('Sign Up failed. Status returned by the server: ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const signInSuccess = (data) => {
  $('#sign-in-close').click()   // close sign-in modal
  $('#change-password-btn').prop('disabled', false)
  $('#sign-out-btn').prop('disabled', false)
  $('#sign-up-btn').prop('disabled', true)
  $('#sign-in-btn').prop('disabled', true)
}

const signInFailure = (error) => {
  $('#sign-in-close').click()   // close sign-in modal dlg
  $('#sign-up-btn').prop('disabled', false)
  $('div#statusBar').text('Sign In failed. Status returned by the server: ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const changePasswordSuccess = (data) => {
  $('#change-password-close').click() // close change password modal dlg
  $('div#statusBar').text = 'Your password was successfully changed.'
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const changePasswordFailure = (error) => {
  $('#change-password-close').click() // close change password modal dlg
  $('div#statusBar').text('Change Password failed. Status returned by the server: ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const signOutSuccess = () => {
  $('#sign-out-close').click()   // close sign-out modal dlg
  $('#change-password-btn').prop('disabled', true)
  $('#sign-out-btn').prop('disabled', true)
  $('#sign-up-btn').prop('disabled', false)
  $('#sign-in-btn').prop('disabled', false)
}

const signOutFailure = (error) => {
  $('#sign-out-close').click()  // close sign-out modal dlg
  $('div#statusBar').text('Sign Out failed. Status returned by the server: ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
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
