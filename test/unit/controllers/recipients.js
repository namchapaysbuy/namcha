'use strict'

require('rootpath')()

const request = require('supertest')
const expect = require('chai').expect
const recipientController = require('apps/controllers/recipients')
const sinon = require('sinon')

describe('recipients controllers', () => {
    describe('post to email handler', () => {
        it('call getMainpage', (done) => {
            let req = {} ,
                res = {
                    render: () => {
                        return true
                    }
                },
                spy = undefined

            spy = res.render = sinon.spy()
            recipientController.getMainpage(req, res)
            expect(spy.calledOnce).to.equal(true)
            const ejsTarget = spy.args[0][0]
            const ejsParam = spy.args[0][1]
            expect(ejsTarget).eql('recipients.ejs')
            expect(ejsParam).eql({ title: 'Recipients' })
            done()
        })
    })
})