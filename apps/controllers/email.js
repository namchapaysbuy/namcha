'use strict'

require('rootpath')()

let helper = require('apps/helpers')
let mongo = require('config/mongo')
let User  = require('apps/models/user')

exports.getMainpage = (req, res) => {
  res.render('index.ejs', { title: 'oo' })
}

exports.postEmail = (req, res) => {
  const emailTo  = req.body.to
  const emailTopic = req.body.topic
  const emailBody = req.body.body

  let emails = []

  if (emailTo)
  {
      if (emailTo.length > 0)
      {
        let emailList = emailTo.split(",")
        for (var key in emailList) {
          let email = emailList[key]
          if(helper.validateEmail(email)){
            emails.push(email)
          }
        }
       res.json(emails)

       // TODO:  send email by gmail smtp
      }
  }
  // TODO:  return http status 
}