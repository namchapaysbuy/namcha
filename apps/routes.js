'use strict'

const router = require('express').Router(),
      pageController = require('./controllers/page')

/**
 * Routes
 */
// router.route('/').get(pageController.getMainpage)

router.route('/').get(pageController.getMainpage)

router.route('/me').get(pageController.getMe)

/**
 * 404 page notfound.
 */
router.route('*').get(pageController.notfound)

module.exports = router