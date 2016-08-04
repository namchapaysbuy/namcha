'use strict'

require('rootpath')()

const sinon = require('sinon')
const nodemailer = require('nodemailer')
const stubTransport = require('nodemailer-stub-transport')
const request = require('supertest')
const striptags = require('striptags')
const expect = require('chai').expect
const config = require('config/app')
const helper = require('apps/helpers')
const emailController = require('apps/controllers/email')
const emailValidator = require('apps/validators/email')
const emailService = require('apps/services/email')
let app
const emailBody = {
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

    it('should return 503, when cannot send email', (done) => {
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

  })

})
