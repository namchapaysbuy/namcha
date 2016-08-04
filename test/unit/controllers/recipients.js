'use strict'

require('rootpath')()

const request = require('supertest')
const expect = require('chai').expect
const sinon = require('sinon')
const recipientValidator = require('apps/libs/validator/recipientValidator')
const recipientController = require('apps/controllers/recipients')

describe('recipients controllers', () => {

    describe('post to email handler', () => {
        it('call getMainpage', done => {
            let req = {} ,
                res = {
                    render: () => {
                        return true
                    }
                },
                spy = res.render = sinon.spy()

            recipientController.getMainpage(req, res)

            expect(spy.calledOnce).to.equal(true)
            expect(spy.args[0][0]).eql('recipients.ejs')
            expect(spy.args[0][1]).eql({ title: 'Recipients' })
            done()
        })
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

    describe('Recipient controller api add', () => {
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

        it('Should validate fail of add recipient', done => {
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
            expect(spy.args[0][0].error).to.equal('Incorrect format Ex.firstname, lastname, x@y.com')
            done()
        })
    })
})