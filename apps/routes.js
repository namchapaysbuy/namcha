'use strict'

require('rootpath')()

const config = require('config/app')
const router = require('express').Router(),
      pageController = require('./controllers/page'),
      emailController = require('./controllers/email')

/**
 * Routes
 */
router.route('/').get(emailController.getMainpage)
router.route(`/api/${config.api_version}/email`).post(emailController.postEmail)

/**
 * 404 page notfound.
 */
router.route('*').get(pageController.notfound)

module.exports = router