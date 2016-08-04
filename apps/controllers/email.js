'use strict'

require('rootpath')()

let config  = require('config/app')
let helper = require('apps/helpers')
let mongo = require('config/mongo')
let User  = require('apps/models/user')
let nodemailer = require('nodemailer')
let striptags = require('striptags')

let getMainpage = (req, res) => {
  res.render('index.ejs', { title: 'Namcha e-mail' })
}

let validateEmailBody = (emailBody) => {
  if (!emailBody) {
    return false
  } else if (!emailBody.to){
    return false
  } else if (!emailBody.topic){
    return false
  } else if (!emailBody.body){
    return false
  }
  return true
}

let validateLength = (maxLength, str) => {
  return !(str.length > maxLength)
}

let postEmail = (req, res) => {

  if (!validateEmailBody(req.body)) {
    res.status(403).send({
      code: 403,
      message: 'Invalid data'
    })
    return
  }

  const emailTo  = req.body.to
  const emailTopic = req.body.topic
  const emailBody = req.body.body

  if (!validateLength(200, emailTopic) && !validateLength(5000, emailBody)) {
    res.status(403).send({
      code: 403,
      message: 'Invalid data'
    })
    return
  }

  let emails = []
  const emailList = emailTo.split(',')

  if(emailList.length > 50){
    res.status(403).send({
      code: 403,
      message: 'Invalid recipient, not over 50 recipients'
    })
    return
  } else if (emailList.length < 1){
    res.status(403).send({
      code: 403,
      message: 'Invalid recipient, need minimum 1 recipient'
    })
    return
  }

  for (let key in emailList) {
    let email = emailList[key]
        email = email.trim()
    if(helper.validateEmail(email)){
      let transporter = nodemailer.createTransport(`smtps://${config.email.sender_email}:${config.email.sender_password}@smtp.gmail.com`)
      let mailOptions = {
        from: `${config.email.sender_name} <${config.email.sender_email}>`,
        to: email,
        subject: emailTopic,
        text: striptags(emailBody),
        html: emailBody
      }
      transporter.sendMail(mailOptions, function(error, info){
        if(error){
          res.status(503).send({
            code: 503,
            error
          })
          return
        }
        res.status(200).send({
          code: 200,
          message: 'Success'
        })
      })
    }
  }
}

module.exports = {
  getMainpage,
  validateEmailBody,
  postEmail,
  validateLength
}
