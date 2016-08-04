'use strict'

require('rootpath')()

const nodemailer = require('nodemailer')
const config = require('config/app')
const striptags = require('striptags')

let send = (recipients, topic, body) => {
  for(let key in recipients){
    let recipient = recipients[key]
    let transporter = nodemailer.createTransport(`smtps://${config.email.sender_email}:${config.email.sender_password}@smtp.gmail.com`)
    let mailOptions = {
      from: `${config.email.sender_name} <${config.email.sender_email}>`,
      to: recipient,
      subject: topic,
      text: striptags(body),
      html: body
    }
    transporter.sendMail(mailOptions, function(error, info){
      return { status: !error, error }
    })
  }
}

module.exports = {
  send
}
