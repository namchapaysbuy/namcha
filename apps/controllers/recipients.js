'use strict'

require('rootpath')()

const is = require('is_js')
const recipientValidator = require('apps/validators/recipientValidator')
const Recipient  = require('apps/models/recipient')

const ERROR_MESSAGE = 'Incorrect format Ex.firstname, lastname, x@y.com'

exports.addRecipient = (req, res) => {
  
  _response(res, 201, { code: 201, message: 'Success', recipient: '' })
}

function _response(res, code, message) {
  return res.status(code).send({
    code,
    message
  })
}