'use strict'

const is = require('is_js')

let validTopic = (topic) => {
  return topic.length <= 500
}

let validBody = (body) => {
  return body.length <= 5000
}

let validRecipient = (recipient) => {
  return is.email(recipient)
}

let getValidRecipient = (recipients) => {
  let result = []
  recipients = recipients.split(',')
  for(let i = 0; i < recipients.length; i++){
    let email = recipients[i].trim()
    if(validRecipient(email)) {
      result.push(email)
    }
  }
  return result
}

module.exports = {
  validTopic,
  validBody,
  validRecipient,
  getValidRecipient
}
