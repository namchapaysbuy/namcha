'use strict'

require('rootpath')()

const request = require('supertest')
const expect = require('chai').expect
const recipientController = require('apps/controllers/recipients')
const sinon = require('sinon')

describe('recipients controllers', () => {
    describe('post to email handler', () => {
        it('call getMainpage', done => {
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

    describe('add validare recipients', () => {
        it('Should valid true', done => {
            expect(recipientController.validateAddRecipient({
                firstName: 'David',
                lastName: 'Beckham',
                email: 'david.beckham@gmail.com'
            })).to.be.true
            done()
        })

        it('Should valid false', done => {
            expect(recipientController.validateAddRecipient({
                firstName: 'David',
                lastName: 'Beckham'
            })).to.be.false
            expect(recipientController.validateAddRecipient()).to.be.false
            done()
        })

    }) 

    describe('add controller recipients', () => {
        it('Should add recipients', done => {
            const req = {
                body: {
                    firstName: 'David',
                    lastName: 'Beckham',
                    email: 'david.beckham@gmail.com'
                }
            }
            const res = {
                send: () => {}
            }
            const spy = res.send = sinon.spy()
            recipientController.addRecipient(req, res)
            expect(spy.args[0][0].code).to.equal(201)
            expect(spy.args[0][0].message).to.equal('Success')
            expect(spy.args[0][0].recipient).eql({ 
                email:"david.beckham@gmail.com",
                firstName:"David",
                lastName:"Beckham"})
            done()
        })

        it('Should validate fail', done => {
            const req = {
                body: {
                    firstName: 'David'
                }
            }
            const res = {
                send: () => {}
            }
            const spy = res.send = sinon.spy()
            recipientController.addRecipient(req, res)
            expect(spy.args[0][0].code).to.equal(403)
            done()
        })
    })
})