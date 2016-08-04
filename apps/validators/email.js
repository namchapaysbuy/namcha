'use strict'

const is = require('is_js')

let validTopic = (topic) => {
  return (topic ? topic.length <= 500 : false)
}

let validBody = (body) => {
  return (body ? body.length <= 500 : false)
}

let validRecipient = (recipient) => {
  return is.email(recipient)
}

let getValidRecipient = (recipients) => {
  let result = []
  if(recipients){
    recipients = recipients.split(',')
    for(let i = 0; i < recipients.length; i++){
      let email = recipients[i].trim()
      if(validRecipient(email)) {
        result.push(email)
      }
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
