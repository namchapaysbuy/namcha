'use strict'

require('rootpath')()

let config  = require('config/app')
let helper = require('apps/helpers')
let mongo = require('config/mongo')
let User  = require('apps/models/user')

exports.validateAddRecipient = recipient => {
  return recipient && recipient.firstName && recipient.lastName && recipient.email ? true : false
}

exports.getMainpage = (req, res) => {
  res.render('recipients.ejs', { title: 'Recipients' })
}

exports.addRecipient = (req, res) => {
  req.body = {
    firstName: 'David',
    lastName: 'Beckham',
    email: 'david.beckham@gmail.com'
  }

  const result = {
    code: 201,
    message: 'Success',
    recipient: {
      firstName: 'David',
      lastName: 'Beckham',
      email: 'david.beckham@gmail.com'
    }
  }
  return res.send(result)
}

