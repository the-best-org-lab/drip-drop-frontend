'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
// ALWAYS, ALWAYS first in event handler
  event.preventDefault()
  // prefer event.target over 'this' NEVER use 'this'
  const data = getFormFields(event.target)
  // initiates an HTTP request that was defined in the api moddule as 'signup'
  api.signUp(data)  // passing the credentials to the ajax call
    .then(ui.signUpSuccess)   // passing the credentials to the ajax call
    // can have multiple '.then' executed in order and passes its return to the next '.then'
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
// ALWAYS, ALWAYS first in event handler
  event.preventDefault()
  // prefer event.target over 'this' NEVER use 'this'
  const data = getFormFields(event.target)
  // initiates an HTTP request that was defined in the api moddule as 'signup'
  api.signIn(data)  // passing the credentials to the ajax call
    .then(ui.signInSuccess)   // passing the credentials to the ajax call
    // can have multiple '.then' executed in order and passes its return to the next '.then'
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
// ALWAYS, ALWAYS first in event handler
  event.preventDefault()
  // prefer event.target over 'this' NEVER use 'this'
  const data = getFormFields(event.target)
  // initiates an HTTP request that was defined in the api moddule as 'signup'
  api.changePassword(data)  // passing the credentials to the ajax call
    .then(ui.changePasswordSuccess)   // passing the credentials to the ajax call
    // can have multiple '.then' executed in order and passes its return to the next '.then'
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // prefer event.target over 'this' NEVER use 'this'
  // const data = getFormFields(event.target)
  // initiates an HTTP request that was defined in the api moddule as 'signup'
  api.signOut()  // passing the credentials to the ajax call
    .then(ui.signOutSuccess)   // passing the credentials to the ajax call
    // can have multiple '.then' executed in order and passes its return to the next '.then'
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  // 'on' calls the callback function and passes the browser 'event' as the firsr arg
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
