'use strict'

const router = require('express').Router(),
      pageController = require('./controllers/page'),
      emailController = require('./controllers/email')

/**
 * Routes
 */
router.route('/').get(emailController.getMainpage)

/**
 * 404 page notfound.
 */
router.route('*').get(pageController.notfound)

module.exports = router