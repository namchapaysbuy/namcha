'use strict'

require('rootpath')()

let mongo = require('config/mongo')
let User  = require('apps/models/user')

exports.getMainpage = (req, res) => {
  res.render('index.ejs', { title: 'oo' })
}