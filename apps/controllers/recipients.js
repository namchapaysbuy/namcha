'use strict'

require('rootpath')()

let config  = require('config/app')
let helper = require('apps/helpers')
let mongo = require('config/mongo')
let User  = require('apps/models/user')

exports.getMainpage = (req, res) => {
  res.render('recipients.ejs', { title: 'Recipients' })
}

