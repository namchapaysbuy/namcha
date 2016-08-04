'use strict'

let index  = require('../../public/javascript/index.js');
let chai = require('chai')
let should = chai.should()
let expect = chai.expect

// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);

describe('index.js', function() {

  it('should return true when object in array is all email', function() {
    return index.isAllEmail(['pantakan@gmail.com','somboon@gmail.com'])
    .then(data => {
        expect(data).to.equal(true)
    })    
  })

  it('should return true when some object in array is not email', function() {
    return index.isAllEmail(['pantakan@gmail.com','foo'])
      .catch(error => {
        expect(error).to.equal(false)
      })
  })
  
  it('should return true when email list more than 50', function() {

    let emailList = ''
    for(let i = 0; i <= 51; i++){ 
        emailList += 'pantakan' + i + '@gmail.com,';
    }
    emailList += emailList.substring(emailList.length, emailList.length - 1);
    emailList = emailList.split(',');
 
    return index.isOverLimitedEmail(emailList)
    .then(data => {   
      expect(data).to.equal(true)
    })
  })

  it('should return false when email list less than 50', function() {

    let emailList = ''
    for(let i = 0; i <= 1; i++){ 
        emailList += 'pantakan' + i + '@gmail.com,';
    }
    emailList += emailList.substring(emailList.length, emailList.length - 1);
    emailList = emailList.split(',');
 
    return index.isOverLimitedEmail(emailList)
    .catch(error => {   
      expect(error).to.equal(false)
    })
  })

})
