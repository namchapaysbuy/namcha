'use strict'

require('rootpath')()

const request = require('supertest')
const expect = require('chai').expect
const sinon = require('sinon')
const recipientValidator = require('apps/validators/recipientValidator')
const recipientController = require('apps/controllers/recipients')
const config = require('config/app')

let app
const stubValidInputRecipient = {
    firstname: 'Pitshy',
    lastname: 'Khonngam',
    email: 'pitsamai@paysbuy.com'
}
const recipientRoute = `/api/${config.api_version}/recipients`

describe('Recipients controllers', () => {

    before(() => {
        app = require('server')
    })

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