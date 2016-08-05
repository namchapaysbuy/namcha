'use strict'

require('rootpath')()

const expect = require('chai').expect
const recipientValidator = require('apps/validators/recipientValidator')

describe('Recipients validator', () => {
    let recipient

    it('Should return true if recipient is valid', done => {
        recipient = {
            firstname: 'David',
            lastname: 'Beckham',
            email: 'david.beckham@gmail.com'
        }

        expect(recipientValidator.validateNewRecipient(recipient)).to.be.true
        done()
    })

    it('Should return false if recipient is invalid', done => {
        recipient = {
            firstname: 'David',
            lastname: 'Beckham'
        }
        expect(recipientValidator.validateNewRecipient(recipient)).to.be.false

        recipient = {}
        expect(recipientValidator.validateNewRecipient(recipient)).to.be.false

        recipient = undefined
        expect(recipientValidator.validateNewRecipient(recipient)).to.be.false

        done()
    })
}) 