'use strict'

require('rootpath')()

const is = require('is_js')
const recipientValidator = require('apps/validators/recipientValidator')
const recipientFormatter = require('apps/services/recipientFormatter')
const Recipient  = require('apps/models/recipient')

const ERROR_MESSAGE = 'Incorrect format Ex.firstname, lastname, x@y.com'

let recipientList = [
    {
      firstname: 'One',
      lastname: 'onelastname',
      email: 'one@email.com'
    }
  ]

exports.addRecipient = (req, res) => {
  if (!recipientValidator.validateNewRecipient(req.body)) {
    // fix this (status)
    res.status(200)
    return res.send({ code: 999, message: 'Error' })
  }

  const newRecipient = recipientFormatter.validRecipientFormat(req.body)
  res.status(201)
  return res.send({ code: 201, message: 'Success', recipient: newRecipient })
}

exports.getRecipient = (req, res) => {

  recipientList.push({req})
  
  _response(res, 200, { code: 200, message: 'Success', recipientList: '' })
}

function _response(res, code, message) {
  return res.status(code).send({
    code,
    message
  })
}