
function checkValidEmailForm () { 

  var inputTo = $('#inputTo').val()
  var inputTopic = $('#inputTopic').val()
  var inputBody = $('#inputBody').val()

  if (inputTo && inputTopic && inputBody)
  {    
    var emailArray = stringEmailListToArray(inputTo)
    
    if (validateAllEmailFormat(emailArray)){
      $('#buttonSend').removeAttr('disabled')
    } else{
      $('#buttonSend').attr('disabled','disabled')
    }

    if (isOverLimitedEmail(emailArray)){
      $('#inputTo').attr('data-toggle','popover')
    } else {
       $('#inputTo').removeAttr('data-toggle','popover')
    }
  } else {
    $('#buttonSend').attr('disabled','disabled')
  }
}

function sendClick () {
   $('#inputTo').popover('show')
}

function stringEmailListToArray (inputTo) {
  return inputTo.replace(/ /g,'').split(',')  
}

function isOverLimitedEmail (email) {  
  return email.length > 50 
}

function validateAllEmailFormat (email) { 
  return is.all.email(email)
}

if(typeof exports !== 'undefined') {
    global.is = require('is_js');
    exports.validateAllEmailFormat = validateAllEmailFormat;
    exports.isOverLimitedEmail = isOverLimitedEmail;
    exports.stringEmailListToArray = stringEmailListToArray;
}

