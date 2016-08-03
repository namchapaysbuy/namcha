'use strict'

require('rootpath')()

let config  = require('config/app')
let helper = require('apps/helpers')
let mongo = require('config/mongo')
let User  = require('apps/models/user')
let nodemailer = require('nodemailer')
let striptags = require('striptags')

let getMainpage = (req, res) => {
  res.render('index.ejs', { title: 'oo' })
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

let postEmail = (req, res) => {
  const emailTo  = req.body.to
  const emailTopic = req.body.topic
  const emailBody = req.body.body

  let emails = []

  res.status(201).send({
    code: 201,
    message: 'Success'
  })

  // if (emailTo)
  // {
  //     if (emailTo.length > 0)
  //     {
  //       let emailList = emailTo.split(",")
  //       for (let key in emailList) {
  //         let email = emailList[key]
  //         if(helper.validateEmail(email)){
  //           emails.push(email)
  //         }
  //       }
  //       // create reusable transporter object using the default SMTP transport
  //       let transporter = nodemailer.createTransport(`smtps://${config.email.sender_email}:${config.email.sender_password}@smtp.gmail.com`)
  //       let mailOptions = {
  //         from: `${config.email.sender_name} <${config.email.sender_email}>`,
  //         to: emails.join(', '),
  //         subject: emailTopic,
  //         text: striptags(emailBody),
  //         html: emailBody
  //       }
  //       transporter.sendMail(mailOptions, function(error, info){
  //         if(error){
  //           res.sendStatus(503)
  //           res.json(error)
  //         }
  //         res.json(mailOptions)
  //       })
  //      // TODO:  send email by gmail smtp
  //     }
  // }
  // TODO:  return http status
}

module.exports = {
  getMainpage,
  validateEmailBody,
  postEmail
}