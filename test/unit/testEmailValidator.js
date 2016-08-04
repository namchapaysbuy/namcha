'use strict'

require('rootpath')()
let emailValidator = require('apps/validators/email')
let expect = require('chai').expect
let stubValidFormEmail = {
  topic: 'topic',
  body: 'body'
}
let stubInvalidFormEmail = {
  topic: stubValidFormEmail.topic.repeat(500),
  body: stubValidFormEmail.body.repeat(5000)
}

describe('test email validator', () => {
  it('should return true, when email topic is shorter than 500', (done) => {
    const result = emailValidator.validTopic(stubValidFormEmail.topic)

    expect(result).eql(true)
    done()
  })

  it('should return true, when email body is shorter than 5000', (done) => {
    const result = emailValidator.validTopic(stubValidFormEmail.body)

    expect(result).eql(true)
    done()
  })

  it('should return false, when email topic is greater than 500', (done) => {
    const result = emailValidator.validTopic(stubInvalidFormEmail.topic)

    expect(result).eql(false)
    done()
  })

  it('should return false, when email body is greater than 5000', (done) => {
    const result = emailValidator.validBody(stubInvalidFormEmail.body)

    expect(result).eql(false)
    done()
  })
})
