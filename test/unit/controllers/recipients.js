'use strict'

require('rootpath')()

const request = require('supertest')
const expect = require('chai').expect
const sinon = require('sinon')
const recipientController = require('apps/controllers/recipients')
const config = require('config/app')
let app
const stubValidInputRecipient = {
    firstname: 'Pitshy',
    lastname: 'Khonngam',
    email: 'pitsamai@paysbuy.com'
}
const recipientRoute = `/api/${config.api_version}/recipients`
const recipientModelFactory  = require('apps/factories/recipientModelFactory')

describe('Recipients controllers', () => {

    before(() => {
        app = require('server')
    })

    it('Should add Recipients successfully if params is valid', done => {
        // arrange
        const req = {
            body: {
                firstname: "david",
                lastname: "beckham",
                email: "DAVID.beckham@gmail.com"
            }
        }
        
        const res = {
            _self: this,
            send: () => {
                
            },
            status: () => {

            }
        }
        const spySend = res.send = sinon.spy()
        const spyStatus = res.status = sinon.spy()
        const expectedResult = {
            firstname: "David",
            lastname: "Beckham",
            email: "david.beckham@gmail.com"
        }
        sinon.stub(recipientModelFactory, 'getRecipientModel', () => {
            return { save: () => {} }
        })

        // act
        recipientController.addRecipient(req, res)

        // assert
        const resultSend = spySend.args[0][0]
        const resultStatus = spyStatus.args[0][0]
        expect(spySend.calledOnce).to.be.true
        expect(spyStatus.calledOnce).to.be.true
        expect(resultStatus).eql(201)
        expect(resultSend.code).eql(201)
        expect(resultSend.message).eql('Success')
        expect(resultSend.recipient).eql(expectedResult)
        done()
    })

    it('should return 200, when got list of recipient', done => {
        const response = request(app)
                        .get(recipientRoute)
                        .send(stubValidInputRecipient)

        response.expect(200, (req,res) => {
            expect(res.body.code).eql(200)
            expect(res.body.message).eql('Success')
            expect(stubValidInputRecipient).to.be.oneOf(res.bod.result)
            
        })
        done()
    })
})