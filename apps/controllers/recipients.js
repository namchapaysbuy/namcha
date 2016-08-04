'use strict'

require('rootpath')()

const config  = require('config/app')
const helper = require('apps/helpers')
const mongo = require('config/mongo')
const User  = require('apps/models/user')
const recipientValidator = require('apps/libs/validator/recipientValidator')
// const recipientModels = require('apps/models/')

exports.addRecipient = (req, res) => {
  let result = ''
  if(!recipientValidator.validateNewRecipient(req.body)){
    result = {
      code: 403,
      error: 'Incorrect format Ex.firstname, lastname, x@y.com'
    }
  }
  else {
    // recipientModels.
    result = {
      code: 201,
      message: 'Success',
      recipient: {
        firstName: 'David',
        lastName: 'Beckham',
        email: 'david.beckham@gmail.com'
      }
    }
  }
  return res.send(result)
}

