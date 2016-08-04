'use strict'

require('rootpath')()

let request = require('supertest')
let expect = require('chai').expect
let Recipient  = require('apps/models/recipient')

describe.skip('test recipient db', function(){
    describe('save recipient', function(){
        let recipient = new Recipient()
        recipient.firstname = 'Nattawut'
        recipient.lastname = 'Tamm'
        recipient.firstname = 'nta@gmail.com'
        recipient.save((err, result) => {
            expect(err).to.be.undefined
            done()
        })
    })
})