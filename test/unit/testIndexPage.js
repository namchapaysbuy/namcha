'use strict'

let index  = require('../../public/javascript/index.js');
let chai = require('chai')
let should = chai.should()

describe('index.js', function() {

  it('should return true when input email format', function(done) {
    return new Promise(function (resolve) {
        index.isAllEmail('pantakan@gmail.com').should.equal(true);
        resolve();
    })
    .then(done());
  })

  it('should return false when input wrong email format ', function(done) {
    return new Promise(function (resolve) {
        index.isAllEmail('pantakangmail.com').should.equal(false);
        resolve();
    })
    .then(done());
  })
  
})
