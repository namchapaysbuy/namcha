'use strict'

require('rootpath')()
let emailValidator = require('apps/validators/email')
let expect = require('chai').expect
let stubData = []

describe('test email validator', () => {
  it('should return true, when email topic shorter than 500', (done) => {
    stubData = {
      topic: 'Valid topic'
    }

    const result = emailValidator.validTopic(stubData.topic)

    expect(result).eql(true)
    done()
  })
})
