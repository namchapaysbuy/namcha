checkEmptyValue = function () { 

  var inputTo = $('#inputTo').val()
  var inputTopic = $('#inputTopic').val() 
  var inputBody = $('#inputBody').val()

  if (inputTo && inputTopic && inputBody)
  {    
    isAllEmail(_email)
    .then(result => { 
      if (result){ 
         return isOverLimitedEmail(_email)
      } 
    })
    .then(result => {
      if(result){ 
        $('#buttonSend').attr('disabled','disabled')
      } else {
        $('#buttonSend').removeAttr('disabled')
      }
    })
    .catch(error => {
      $('#buttonSend').attr('disabled','disabled')
    })
    // $('#buttonSend').removeAttr('disabled')
  } else {
    $('#buttonSend').attr('disabled','disabled')
  }
}

function stringEmailListToArray (inputTo) {
  return new Promise((resolve, reject) => {
    resolve(inputTo.split(','))
  })
}

function isOverLimitedEmail (email) {  
  return new Promise((resolve, reject) => {     
    resolve(email.length > 50)        
  })
}

function isAllEmail (email) { 
  return new Promise((resolve, reject) => {   
    if(is.all.email(email)){    
      resolve(true)
    } else {      
      resolve(false)
    }
  })  
}

if(typeof exports !== 'undefined') {
    global.is = require('is_js');
    exports.isAllEmail = isAllEmail;
    exports.isOverLimitedEmail = isOverLimitedEmail;
    exports.stringEmailListToArray = stringEmailListToArray;
}

