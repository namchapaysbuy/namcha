'use strict'

require('rootpath')()

let mongo = require('config/mongo')
let User  = require('apps/models/user')

exports.notfound = (req, res) => {
  res.render('index.ejs', { title: 'title' })
  // res.send('404 notfound')
}