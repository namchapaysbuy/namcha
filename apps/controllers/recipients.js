'use strict'

require('rootpath')()

const recipientValidator = require('apps/validators/recipientValidator')
const emailValidator = require('apps/validators/emailValidator')
const Recipient  = require('apps/models/recipient')

const ERROR_MESSAGE = 'Incorrect format Ex.firstname, lastname, x@y.com'

exports.addRecipient = (req, res) => {
  if(!recipientValidator.validateNewRecipient(req.body)) res.send({ code: 403, error: ERROR_MESSAGE })

  const recipientData = {
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email
  }

  const recipient = new Recipient(recipientData)

  recipient.save(err => {
    if (err) return res.send({ code: 403, error: err.message })

    return res.send({ code: 201, message: 'Success', recipient: recipientData })
  })
}
