'use strict'

require('rootpath')()

const config  = require('config/app')
const helper = require('apps/helpers')
const mongo = require('config/mongo')
const User  = require('apps/models/user')
const recipientValidator = require('apps/libs/validator/recipientValidator')
const Recipient  = require('apps/models/recipient')

exports.addRecipient = (req, res) => {
  if(!recipientValidator.validateNewRecipient(req.body)){
    return res.send({
      code: 403,
      error: 'Incorrect format Ex.firstname, lastname, x@y.com'
    })
  }
  else {
    const recipientData = {
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      email: req.body.email
    }

    const recipient = new Recipient(recipientData)

    recipient.save(err => {
      if (err) {
        return res.send({
          code: 403,
          error: err.message
        })
      }
      else {
        return res.send({
          code: 201,
          message: 'Success',
          recipient: recipientData
        })
      }
    })
  }
}
