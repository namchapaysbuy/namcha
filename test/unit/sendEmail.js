'use strict'

require('rootpath')()

let request = require('supertest')
let expect = require('chai').expect
let helper = require('apps/helpers')
let emailController = require('apps/controllers/email')
let app

describe('test email controllers', function(){

    describe('post to email handler', function(){

        before(function(){
            app = require('server')
        })

        it('should return 403 and get error message when invalid content', function(done){

            var emailBody = {
                to: null,
                topic: 'test one email',
                body: 'test body for one mail'
            }

            request(app)
                .post('/api/v1/email')
                .send(emailBody)
                .expect(null, function(req,res){
                    expect(res.status).eql(403);
                    expect(res.body.code).eql(403);
                    expect(res.body.message).eql('Invalid data');
                    done();
                })
        })
        
        it('should return 201 and get success message for one email', function(done){

            var emailBody = {
                to: 'one@test.com',
                topic: 'test one email',
                body: 'test body for one mail'
            }

            request(app)
                .post('/api/v1/email')
                .send(emailBody)
                .expect(null, function(req,res){
                    expect(res.status).eql(201);
                    expect(res.body.code).eql(201);
                    expect(res.body.message).eql('Success');
                    done();
                })
        })

    })

    describe('validate email body', function(){
            it('should return false when missing email body on null recipient', function(done){
            var emailBody = {
                to: null,
                topic: 'test one email',
                body: 'test body for one mail'
            }             
            let result = emailController.validateEmailBody(emailBody)
            expect(result).eql(false)
            done()
        } )

        it('should return false when missing email body on null topic', function(done){
            var emailBody = {
                to: 'one@test.com',
                topic: null,
                body: 'test body for one mail'
            }             
            let result = emailController.validateEmailBody(emailBody)
            expect(result).eql(false)
            done()
        } )

        it('should return false when missing email body on null body', function(done){
            var emailBody = {
                to: 'one@test.com',
                topic: 'test one email',
                body: null
            }             
            let result = emailController.validateEmailBody(emailBody)
            expect(result).eql(false)
            done()
        } )

        it('should return true when right email body', function(done){
            var emailBody = {
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