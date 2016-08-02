'use strict'

require('rootpath')()

let mongo = require('config/mongo')
let User  = require('apps/models/user')

exports.getMainpage = (req, res) => {
  res.render('index.ejs', { title: 'oo' })
} 

exports.notfound = (req, res) => {
  res.send('404 notfound')
}

exports.getMe = (req, res) => {
  res.send('Get me method...')
}