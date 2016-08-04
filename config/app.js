'use strict'

let config, env, port

env = process.env.NODE_ENV || 'development'
process.env.NODE_ENV = env

config = {
  'default': {
    'site_name': 'Node.JS Basic',
    'api_version': 'v1',
    'email': {
      'sender_name' : 'email system',
      'sender_email' : 'namchapaysbuy@gmail.com',
      'sender_password' : 'namcha1234'
    }
  },
  'production': {
    'host': {
      'port': 3000,
      'self': process.env.SELF_URL || 'http://localhost.com/'
    },
    'mongodb': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/namcha'
  },
  'development': {
    'host': {
      'port': 3000,
      'self': 'http://localhost:3000' || (`http://localhost:${process.env.PORT}`)
    },
    'mongodb': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/namcha'
  }
}
module.exports = Object.assign(config['default'], config[env])