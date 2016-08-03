checkEmptyValue = function () { 

  var inputTo = $('#inputTo').val()
  var inputTopic = $('#inputTopic').val() 
  var inputBody = $('#inputBody').val()

  if (inputTo && inputTopic && inputBody)
  {
    isAllEmail(inputTo)
    .then(result => { 
      if (result){ 
         return isOverLimitedEmail(inputTo)
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
      console.error('error: ', error)
    })
    // $('#buttonSend').removeAttr('disabled')
  } else {
    $('#buttonSend').attr('disabled','disabled')
  }
}

function isOverLimitedEmail (email) {  
  return new Promise((resolve, reject) => {     
    var _email = email.split(',')
    console.log('_email is ', _email)
      if(_email.lenght <= 50 ){      
        resolve(true)
      } else {       
        resolve(false)
      }    
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
}