'use strict'

const router = require('express').Router(),
      pageController = require('./controllers/page')

/**
 * Routes
 */
// router.route('/').get(pageController.getMainpage)

/**
 * 404 page notfound.
 */
router.route('*').get(pageController.notfound)

module.exports = router