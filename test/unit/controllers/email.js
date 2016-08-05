'use strict'

require('rootpath')()

const sinon = require('sinon')
const request = require('supertest')
const expect = require('chai').expect
const emailController = require('apps/controllers/email')
const emailValidator = require('apps/validators/email')
const emailService = require('apps/services/email')
let app
let emailBody = {
  to: 'one@test.com',
  topic: 'test one email',
  body: 'test body for one mail'
}

describe('test email controller', () => {

  describe('post to email handler', () => {

    before(function(){
      app = require('server')
    })

    it('should return 200, when email has sent', (done) => {
      sinon.stub(emailService, 'send', () => {
        return {
          status: true,
          error: null
        }
      })
      const response = request(app)
                        .post('/api/v1/email')
                        .send(emailBody)

      response.expect(null, function(req, res){
        expect(res.body.code).eql(200)
        expect(res.body.message).eql('Success')

        emailService.send.restore()
        done()
      })
    })

    it('should return 503, when email cannot send', (done) => {
      sinon.stub(emailService, 'send', () => {
        return {
          status: false,
          error: 'stub return error'
        }
      })
      const response = request(app)
                        .post('/api/v1/email')
                        .send(emailBody)

      response.expect(null, function(req, res){
        expect(res.body.code).eql(503)

        emailService.send.restore()
        done()
      })
    })

    it('should return 403, when recipient is invalid', (done) => {
      delete emailBody.to
      const response = request(app)
                        .post('/api/v1/email')
                        .send(emailBody)

      response.expect(null, function(req, res){
        expect(res.body.code).eql(403)
        done()
      })
    })

    it('should return 403, when topic is invalid', (done) => {
      delete emailBody.topic
      const response = request(app)
                        .post('/api/v1/email')
                        .send(emailBody)

      response.expect(null, function(req, res){
        expect(res.body.code).eql(403)
        done()
      })
    })

    it('should return 403, when body is invalid', (done) => {
      delete emailBody.body
      const response = request(app)
                        .post('/api/v1/email')
                        .send(emailBody)

      response.expect(null, function(req, res){
        expect(res.body.code).eql(403)
        done()
      })
    })

    it('should return 403, when email request is invalid', (done) => {
      const response = request(app)
                        .post('/api/v1/email')

      response.expect(null, function(req, res){
        expect(res.body.code).eql(403)
        done()
      })
    })

  })

})
