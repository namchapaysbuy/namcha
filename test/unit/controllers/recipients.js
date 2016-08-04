'use strict'

require('rootpath')()

const request = require('supertest')
const expect = require('chai').expect
const sinon = require('sinon')
const recipientValidator = require('apps/validators/recipientValidator')
const recipientController = require('apps/controllers/recipients')
let app

describe('recipients', () => {

    before(() => {
        app = require('server')
    })

    describe('Recipients validator', () => {
        it('Should recipient validator return true', done => {
            expect(recipientValidator.validateNewRecipient({
                firstName: 'David',
                lastName: 'Beckham',
                email: 'david.beckham@gmail.com'
            })).to.be.true
            done()
        })

        it('Should recipient validate return false', done => {
            expect(recipientValidator.validateNewRecipient({
                firstName: 'David',
                lastName: 'Beckham'
            })).to.be.false
            expect(recipientValidator.validateNewRecipient()).to.be.false
            done()
        })
    }) 
})