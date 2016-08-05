'use strict'

require('rootpath')()

const request = require('supertest')
const expect = require('chai').expect
const sinon = require('sinon')
const recipientController = require('apps/controllers/recipients')

describe('Recipients controllers', () => {
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
        const spy = res.send = sinon.spy()
        const expectedResult = {
            firstname: "David",
            lastname: "Beckham",
            email: "david.beckham@gmail.com"
        }

        // act
        recipientController.addRecipient(req, res)

        // assert
        const result = spy.args[0][0]
        expect(spy.calledOnce).to.be.true
        // expect(result.status).eql(201)
        expect(result.code).eql(201)
        expect(result.message).eql('Success')
        expect(result.recipient).eql(expectedResult)
        done()
    })
})