'use strict'

require('rootpath')()
const emailValidator = require('apps/validators/email')
const expect = require('chai').expect
const stubValidFormEmail = {
  topic: 'topic',
  body: 'body',
  to: 'abc@abc.com'
}
const stubInvalidFormEmail = {
  topic: stubValidFormEmail.topic.repeat(500),
  body: stubValidFormEmail.body.repeat(5000),
  to: stubValidFormEmail.to.replace('@', ''),
  multipleTo: 'abc@abc1.com, abcabc2.com, abc@abc3com'
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

  it('should return true, when email recipient is valid', (done) => {
    const result = emailValidator.validRecipient(stubValidFormEmail.to)

    expect(result).eql(true)
    done()
  })

  it('should return false, when email recipient is invalid', (done) => {
    const result = emailValidator.validRecipient(stubInvalidFormEmail.to)

    expect(result).eql(false)
    done()
  })

  it('should return list that contains only valid recipient\'s email', (done) => {
    const result = emailValidator.getValidRecipient(stubInvalidFormEmail.multipleTo)

    expect(result).to.have.lengthOf(1)
    done()
  })
})
