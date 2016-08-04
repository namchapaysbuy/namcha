'use strict'

let index  = require('../../public/javascript/index.js');
let chai = require('chai')
let should = chai.should()
let expect = chai.expect

// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);

describe('index.js', function() {

  let stringEmaiList = prepareString50EmailList()
  let arrayEmail = [];

  function prepareString50EmailList () {
   let emailList = ''
    for(let i = 0; i < 50 ; i++){ 
          emailList += 'pantakan' + i + '@gmail.com,';
      }

    return emailList.substring(0, emailList.length - 1)
  }
  
  
  describe('stringEmailListToArray function', function() {

    it('should return array when input is seperated by comma', function() {
       expect(index.stringEmailListToArray(stringEmaiList)).to.be.an('array')
     })  
    
  })

  describe('validateAllEmailFormat function', function() {

    it('should return true when object in array is all email', function() {
      expect(index.validateAllEmailFormat(['pantakan@gmail.com','somboon@gmail.com'])).to.equal(true)  
    })

    it('should return true when some object in array is not email', function() {
       expect(index.validateAllEmailFormat(['pantakan@gmail.com','foo'])).to.equal(false)
    })

  })

 describe('isOverLimitedEmail function', function() {
    
    it('should return true when email list greater than 50', function() {

      let arrayEmail50 = index.stringEmailListToArray(stringEmaiList)      
      arrayEmail50.push('pantakan51@gmail.com')
      expect(index.isOverLimitedEmail(arrayEmail50)).to.equal(true)

    })

    it('should return false when email list less than or equal to 50', function() {
      let arrayEmail50 = index.stringEmailListToArray(stringEmaiList)      
      expect(index.isOverLimitedEmail(arrayEmail50.pop())).to.equal(false)
      
    })
   
  })

})
