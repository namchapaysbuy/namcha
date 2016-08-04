'use strict'

module.exports = {
  validTopic: (topic) => {
    return topic.length <= 500
  },
  validBody: (body) => {
    return body.length <= 5000
  }
  // format: (email) => {
  //   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   return re.test(email)
  // },
  // length: (maxLength, string) => {
  //   return !(str.length > maxLength)
  // },
  // fields: (fields, required) => {
  //   if(typeof fields == 'object'){
  //
  //   } else {
  //
  //   }
  // }
}
