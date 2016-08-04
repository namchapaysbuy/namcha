'use strict'

require('rootpath')()

let request = require('supertest')
let expect = require('chai').expect
let helper = require('apps/helpers')
let emailController = require('apps/controllers/email')
let app

describe('test email controller', function(){
    this.timeout(5000)
    describe('post to email handler', function(){
        before(function(){
            app = require('server')
        })
        it('should return 403 HTTP header response and invalid recipients, not over 50 recipients', (done) => {
          let emailBody = {
            to: 'abc1@abc1.com, abc2@abc2.com, abc3@abc3.com, abc4@abc4.com, abc5@abc5.com, abc6@abc6.com, abc7@abc7.com, abc8@abc8.com, abc9@abc9.com, abc10@abc10.com, abc11@abc11.com, abc12@abc12.com, abc13@abc13.com, abc14@abc14.com, abc15@abc15.com, abc16@abc16.com, abc17@abc17.com, abc18@abc18.com, abc19@abc19.com, abc20@abc20.com, abc21@abc21.com, abc22@abc22.com, abc23@abc23.com, abc24@abc24.com, abc25@abc25.com, abc26@abc26.com, abc27@abc27.com, abc28@abc28.com, abc29@abc29.com, abc30@abc30.com, abc31@abc31.com, abc32@abc32.com, abc33@abc33.com, abc34@abc34.com, abc35@abc35.com, abc36@abc36.com, abc37@abc37.com, abc38@abc38.com, abc39@abc39.com, abc40@abc40.com, abc41@abc41.com, abc42@abc42.com, abc43@abc43.com, abc44@abc44.com, abc45@abc45.com, abc46@abc46.com, abc47@abc47.com, abc48@abc48.com, abc49@abc49.com, abc50@abc50.com, abc50@abc51.com',
            topic: 'test one email',
            body: 'test body for one mail'
          }
          request(app)
            .post('/api/v1/email')
            .send(emailBody)
            .expect(null, function(req,res){
                expect(res.status).eql(403)
                done()
            })
        })
        it('should return 403 in Body and invalid recipients, not over 50 recipients', (done) => {
          let emailBody = {
            to: 'abc1@abc1.com, abc2@abc2.com, abc3@abc3.com, abc4@abc4.com, abc5@abc5.com, abc6@abc6.com, abc7@abc7.com, abc8@abc8.com, abc9@abc9.com, abc10@abc10.com, abc11@abc11.com, abc12@abc12.com, abc13@abc13.com, abc14@abc14.com, abc15@abc15.com, abc16@abc16.com, abc17@abc17.com, abc18@abc18.com, abc19@abc19.com, abc20@abc20.com, abc21@abc21.com, abc22@abc22.com, abc23@abc23.com, abc24@abc24.com, abc25@abc25.com, abc26@abc26.com, abc27@abc27.com, abc28@abc28.com, abc29@abc29.com, abc30@abc30.com, abc31@abc31.com, abc32@abc32.com, abc33@abc33.com, abc34@abc34.com, abc35@abc35.com, abc36@abc36.com, abc37@abc37.com, abc38@abc38.com, abc39@abc39.com, abc40@abc40.com, abc41@abc41.com, abc42@abc42.com, abc43@abc43.com, abc44@abc44.com, abc45@abc45.com, abc46@abc46.com, abc47@abc47.com, abc48@abc48.com, abc49@abc49.com, abc50@abc50.com, abc50@abc51.com',
            topic: 'test one email',
            body: 'test body for one mail'
          }
          request(app)
            .post('/api/v1/email')
            .send(emailBody)
            .expect(null, function(req,res){
                expect(res.body.code).eql(403)
                done()
            })
        })
        it('should return 403 and get error message when invalid content', function(done){
          let emailBody = {
              to: null,
              topic: 'test one email',
              body: 'test body for one mail'
          }
          request(app)
            .post('/api/v1/email')
            .send(emailBody)
            .expect(null, function(req,res){
                expect(res.status).eql(403)
                expect(res.body.code).eql(403)
                expect(res.body.message).eql('Invalid data')
                done()
            })
        })
        it('should return 200 and get success message for one email', function(done){
            let emailBody = {
                to: 'one@test.com',
                topic: 'test one email',
                body: 'test body for one mail'
            }
            request(app)
                .post('/api/v1/email')
                .send(emailBody)
                .expect(null, function(req,res){
                  expect(res.body.code).eql(200)
                  expect(res.body.message).eql('Success')
                  done()
                })
        })
    })
    describe('validate email body', function(){
            it('should return false when missing email body on null recipient', function(done){
            let emailBody = {
                to: null,
                topic: 'test one email',
                body: 'test body for one mail'
            }
            let result = emailController.validateEmailBody(emailBody)
            expect(result).eql(false)
            done()
        } )
        it('should return false when missing email body on null topic', function(done){
            let emailBody = {
                to: 'one@test.com',
                topic: null,
                body: 'test body for one mail'
            }
            let result = emailController.validateEmailBody(emailBody)
            expect(result).eql(false)
            done()
        } )
        it('should return false when missing email body on null body', function(done){
            let emailBody = {
                to: 'one@test.com',
                topic: 'test one email',
                body: null
            }
            let result = emailController.validateEmailBody(emailBody)
            expect(result).eql(false)
            done()
        } )
        it('should return true when right email body', function(done){
            let emailBody = {
                to: 'onetestcom',
                topic: 'test one email',
                body: 'test body for one mail'
            }
            let result = emailController.validateEmailBody(emailBody)
            expect(result).eql(true)
            done()
        } )
    })
    describe('validate topic and body max length',function(){
        it('should return false when input string grater than max length',function(done){
            let result = emailController.validateLength(4,'12345')
            expect(result).eql(false)
            done()
        })
        it('shoud return true when input string less than max length', function(done){
            let result = emailController.validateLength(4,'123')
            expect(result).eql(true)
            done()
        })
        it('shoud return true when input string equal than max length', function(done){
            let result = emailController.validateLength(4,'1234')
            expect(result).eql(true)
            done()
        })
    })
    describe('validate email recipient format', function(){
        it('should return true when right email format', function(done){
            let result = helper.validateEmail('one@test.com')
            expect(result).eql(true);
            done();
        })
        it('should return true when incorrect email format missing @', function(done){
            let result = helper.validateEmail('oneastest.com')
            expect(result).eql(false);
            done();
        })
        it('should return true when incorrect email format missing .', function(done){
            let result = helper.validateEmail('onea@stestcom')
            expect(result).eql(false);
            done();
        })
        it('should return true when incorrect email format pure string', function(done){
            let result = helper.validateEmail('oneastestcom')
            expect(result).eql(false);
            done();
        })
        it('should return false when no email input', function(done){
            let result = helper.validateEmail(null)
            expect(result).eql(false)
            done()
        })
    })
})
