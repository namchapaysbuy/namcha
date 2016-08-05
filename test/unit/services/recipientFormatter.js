'use strict'

require('rootpath')()

const recipientFormatter = require('apps/services/recipientFormatter')
const expect = require('chai').expect
let stubValidInputRecipient = undefined
describe('test recipient formatter',() => {
    
    beforeEach(() => {
        return stubValidInputRecipient = {
            firstname: 'Pitshy',
            lastname: 'Khonngam',
            email: 'pitsamai@paysbuy.com'
        }
    })

    it('should return valid when add valid recipient format', done => {
        const result = recipientFormatter.validRecipientFormat(stubValidInputRecipient)
        expect(result).eql(stubValidInputRecipient)
        done()
    })

    it('should return valid when add invalid recipient format', done => {
        stubValidInputRecipient.firstname = "p"
        stubValidInputRecipient.lastname = 'kho'
        stubValidInputRecipient.email = 'PiTSAmai@Paysbuy.com'
        const result = recipientFormatter.validRecipientFormat(stubValidInputRecipient)
        expect(result).eql({
            firstname: 'P',
            lastname: 'Kho',
            email: 'pitsamai@paysbuy.com'
        })
        done()
    })

    it('should return valid when add invalid recipient as some charater is uppercase', done => {
        stubValidInputRecipient.firstname = "pITshy"
        const result = recipientFormatter.validRecipientFormat(stubValidInputRecipient)
        expect(result).eql({
            firstname: 'Pitshy',
            lastname: 'Khonngam',
            email: 'pitsamai@paysbuy.com'
        })
        done()

    })

})