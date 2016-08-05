'use strict'

const validRecipientFormat = recipient => {
    const formatter = {
        firstname:  capitalizeFirstLetter(recipient.firstname),
        lastname: capitalizeFirstLetter(recipient.lastname),
        email: recipient.email.toLowerCase()    
        } 
    return formatter
}

function capitalizeFirstLetter(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}


module.exports = {
    validRecipientFormat
}