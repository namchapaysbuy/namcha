checkEmptyValue = function () { 

  var inputTo = $('#inputTo').val()
  var inputTopic = $('#inputTopic').val() 
  var inputBody = $('#inputBody').val()

  if (inputTo && inputTopic && inputBody)
  {
    var _email = inputTo.split(',')
    isAllEmail(_email)
    .then(result => { 
      if (result){ 
         return isOverLimitedEmail(_email)
      } 
    })
    .then(result => {
      if(result){
        console.log('isOverLimitedEmail')
        $('#buttonSend').attr('disabled','disabled')
      } else {
        console.log('isNotOverLimitedEmail')
        $('#buttonSend').removeAttr('disabled')
      }
    })
    .catch(error => {
      $('#buttonSend').attr('disabled','disabled')
      console.error('error: ', error)
    })
    // $('#buttonSend').removeAttr('disabled')
  } else {
    $('#buttonSend').attr('disabled','disabled')
  }
}

function isOverLimitedEmail (email) {  
  return new Promise((resolve, reject) => {     
    //console.log('_email is ', email.length)
      if(email.length > 50 ){  
        resolve(true)
      } else {       
        reject(false)
      }    
  })
}

function isAllEmail (email) { 
  return new Promise((resolve, reject) => {   
    if(is.all.email(email)){    
      resolve(true)
    } else {      
      reject(false)
    }
  })  
}

if(typeof exports !== 'undefined') {
    global.is = require('is_js');
    exports.isAllEmail = isAllEmail;
    exports.isOverLimitedEmail = isOverLimitedEmail;
}