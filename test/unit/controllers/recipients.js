'use strict'

require('rootpath')()

const request = require('supertest')
const expect = require('chai').expect
const sinon = require('sinon')
const recipientValidator = require('apps/validators/recipientValidator')
const recipientController = require('apps/controllers/recipients')

describe('Recipients controllers', () => {
    it('Should add Recipients if params is valid', done => {
        // arrange
        const req = {
            body: {

            }
        }
        const resNested = {
            send: () => {},
            status: () => {}
        }
        const res = {
            send: () => {},
            status: () => resNested
        }
        let spy = resNested.send = sinon.spy()

        // act
        recipientController.addRecipient(req, res)

        // assert
        expect(spy.calledOnce).to.be.true
        done()
    })
})