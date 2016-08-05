'use strict'

require('rootpath')()
const emailValidator = require('apps/validators/emailValidator')
const expect = require('chai').expect

describe('test emailValidator', () => {
  it('should validate pass if email is in correct format', done => {
    expect(emailValidator.validate('j2sdk_ball@gmail.com')).to.be.true
    expect(emailValidator.validate('J2SDK_BALL@GMAIL.COM')).to.be.true
    done()
  })

  it('should validate failed if email is in incorrect format', done => {
    expect(emailValidator.validate('xxx')).to.be.false
    expect(emailValidator.validate('xxx@')).to.be.false
    expect(emailValidator.validate()).to.be.false
    done()
  })
})
