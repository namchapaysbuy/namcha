'use strict'

require('rootpath')()

let request = require('supertest')
let expect = require('chai').expect
let helper = require('apps/helpers')
let emailController = require('apps/controllers/email')

describe('send email function', function(){

    before(function(){
        let app = require('server')
    })

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


    
    // it('should return 201 and get success message for one email', function(done){

    //     var emailBody = {
    //         to: 'one@test.com',
    //         topic: 'test one email',
    //         body: 'test body for one mail'
    //     }

    //     request(app)
    //         .post('/api/v1/email')
    //         .send(emailBody)
    //         .expect(null, function(req,res){
    //             expect(res.status).eql(201);
    //             expect(res.body.code).eql(201);
    //             expect(res.body.message).eql('Success');
    //             done();
    //         })
    // })

})

describe('validate for send email', function(){
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