'use strict'

let config, env, port

env = process.env.NODE_ENV || 'development'
process.env.NODE_ENV = env

config = {
  'default': {
    'site_name': 'Node.JS Basic'
  },
  'production': {
    'host': {
      'port': 3000,
      'self': process.env.SELF_URL || 'http://localhost.com/'
    },
    'mongodb': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/nodejs'
  },
  'development': {
    'host': {
      'port': 3000,
      'self': 'http://localhost:3000' || (`http://localhost:${process.env.PORT}`)
    },
    'mongodb': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/nodejs'
  }
}
module.exports = Object.assign(config['default'], config[env])