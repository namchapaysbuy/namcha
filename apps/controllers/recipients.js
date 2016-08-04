'use strict'

require('rootpath')()

let config  = require('config/app')
let helper = require('apps/helpers')
let mongo = require('config/mongo')
let User  = require('apps/models/user')

function validateAddRecipient(recipient) {
  return recipient && recipient.firstName && recipient.lastName && recipient.email ? true : false
}

exports.validateAddRecipient = validateAddRecipient

exports.getMainpage = (req, res) => {
  res.render('recipients.ejs', { title: 'Recipients' })
}

exports.addRecipient = (req, res) => {
    // req.body = {
  //   firstName: 'David',
  //   lastName: 'Beckham',
  //   email: 'david.beckham@gmail.com'
  // }
  let result = ''
  if(!validateAddRecipient(req.body)){
    result = {
      code: 403,
      error: 'Incorrect format Ex.firstname, lastname, '
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

