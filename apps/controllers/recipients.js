'use strict'

require('rootpath')()

const is = require('is_js')
const recipientValidator = require('apps/validators/recipientValidator')
const recipientFormatter = require('apps/services/recipientFormatter')
const recipientModelFactory  = require('apps/factories/recipientModelFactory')

const ERROR_MESSAGE = 'Incorrect format Ex.firstname, lastname, x@y.com'

let recipientList = [
    {
      firstname: 'One',
      lastname: 'onelastname',
      email: 'one@email.com'
    }
  ]

exports.addRecipient = (req, res) => {
  if (!recipientValidator.validateNewRecipient(req.body)) return false

  const recipient = recipientFormatter.validRecipientFormat(req.body)
  // const recipientModel = recipientModelFactory(recipient.firstname, recipient.lastname, recipient.email)
  

  res.status(201)
  return res.send({ code: 201, message: 'Success', recipient })
}

exports.getRecipient = (req, res) => {

  recipientList.push(req.body)
  
  return res.send({ code: 200, message: 'Success', recipientList })
}

function _response(res, code, message) {
  return res.status(code).send({
    code,
    message
  })
}