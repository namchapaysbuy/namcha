'use strict'

require('rootpath')()

exports.validateNewRecipient = recipient => {
  return recipient && recipient.firstName && recipient.lastName && recipient.email ? true : false
}