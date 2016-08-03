
require('rootpath')()

describe('send email function', function(){

    before(function(){
        request = require('supertest')
        expect = require('chai').expect
        app = require('server')
    })

    it('should return 201 and get success message', function(done){
        request(app)
            .post('/api/v1/email')
            .expect(null, function(req,res){
                expect(res.status).eql(201);
                expect(res.body.code).eql(201);
                expect(res.body.message).eql('Success');
                done();
            })
    })

    it.skip('should return 503 and get error message', function(){
        // can not send email
    })

})