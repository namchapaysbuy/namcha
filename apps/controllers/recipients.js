'use strict'

require('rootpath')()

const is = require('is_js')
const recipientValidator = require('apps/validators/recipientValidator')
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
  
  _response(res, 201, { code: 201, message: 'Success', recipient: '' })
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