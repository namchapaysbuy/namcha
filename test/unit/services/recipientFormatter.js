'use strict'

require('rootpath')()

const recipientFormatter = require('apps/services/recipientFormatter')
const expect = require('chai').expect
const stubValidInputRecipient = {
    // firstname: 'Pitshy',
    firstname: 'P',
    lastname: 'Khonngam',
    email: 'pitsamai@paysbuy.com'
}

describe.skip('test recipient formatter',() => {
    it('should return true if valid add recipient format', done => {
        const result = recipientFormatter.validRecipientFormat(stubValidInputRecipient)
        expect(result).eql(stubValidInputRecipient)
        done()
    })
})