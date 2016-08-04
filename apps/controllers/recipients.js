'use strict'

require('rootpath')()

const config  = require('config/app')
const helper = require('apps/helpers')
const mongo = require('config/mongo')
const User  = require('apps/models/user')
const recipientValidator = require('apps/libs/validator/recipientValidator')

exports.getMainpage = (req, res) => {
  res.render('recipients.ejs', { title: 'Recipients' })
}

exports.addRecipient = (req, res) => {
  let result = ''
  if(!recipientValidator.validateNewRecipient(req.body)){
    result = {
      code: 403,
      error: 'Incorrect format Ex.firstname, lastname, x@y.com'
    }
  }
  else {
    
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

