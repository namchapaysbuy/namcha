'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let recipientSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true
    }
})

// TODO: Instrction how to use
recipientSchema.statics.getByEmail = (email,callback) => {
    return Recipient.find({'email': email},(error, recipient) => {
        if (error) {
            return callback(error)
        }else {
            return callback(recipient)
        }
    })
}

recipientSchema.statics.getAll = (callback) => {
    return Recipient.find({},callback (error, recipient) )
}

recipientSchema.statics.save = (recipient,callback) => {
    return recipient.save((error,recipient) => {
        if (error) {
            return callback(error)
        }else {
            return callback(recipient)
        }
    })
}

let Recipient = mongoose.model('Recipient', recipientSchema)
module.exports = Recipient