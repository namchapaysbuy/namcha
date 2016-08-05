'use strict'

require('rootpath')()

exports.validateNewRecipient = recipient => {
  return recipient && recipient.firstname && recipient.lastname && recipient.email ? true : false
}