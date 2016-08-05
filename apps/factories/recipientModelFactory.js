'use strict'

require('rootpath')()

const Recipient  = require('apps/models/recipient')

exports.getRecipientModel = (firstname, lastname, email) => {
  const recipient = { firstname, lastname, email }

  return new Recipient(recipient)
}