
function checkValidEmailForm() { 

  var inputTo = $('#inputTo').val()
  var inputTopic = $('#inputTopic').val()
  var inputBody = $('#inputBody').val()

  if (inputTo && inputTopic && inputBody)
  {    
    var emailArray = stringEmailListToArray(inputTo)

    validateRecipient(emailArray);
    validateAllInput(emailArray,inputTopic,inputBody)
    
  } else {
    $('#buttonSend').attr('disabled','disabled')
  }
}

function sendClick() {
  checkValidEmailForm()
  //JSON.stringify($('#formEmail').serializeArray())
    $.ajax({
      method: 'POST',
      url: sendEmailUrl,
      data: { 'to' : $('#inputTo').val() , 'topic' :  $('#inputTopic').val() , 'body' : $('#inputBody').val()},
      success: function(result){
       console.log(result);
      }
    });
}

function validateRecipient(emailArray)
{
  if (checkAllRecipientIsValid(emailArray)){
    $('#buttonSend').removeAttr('disabled')
  } else {
    $('#buttonSend').attr('disabled','disabled')
  }
}

function validateAllInput(emailArray,inputTopic,inputBody) {
    validateEmail(emailArray);
    validateTopic(inputTopic);
    validateBody(inputBody);
}

function validateBody(inputBody) {
  if (isOver5000Character(inputBody)) {
    $('#inputBody').popover('show')
  } else {
    $('#inputBody').popover('hide')
  }
}

function validateTopic(inputTopic) {
  if (isOver500Character(inputTopic)) {
    $('#inputTopic').popover('show')
  } else {
    $('#inputTopic').popover('hide')
  }
}

function validateEmail(emailArray) {
  if (isOverLimitedEmail(emailArray)) {
    $('#inputTo').popover('show')
  } else {
    $('#inputTo').popover('hide')
  }
}
/// can test with server-site mocha ///

function stringEmailListToArray (inputTo) {
  return inputTo.replace(/ /g,'').split(',')  
}

function isOverLimitedEmail (email) {  
  return email.length > 50 
}

function isOver500Character (topic) {  
  return topic.length > 500 
}

function isOver5000Character (body) {  
  return body.length > 5000 
}

function checkAllRecipientIsValid(email) { 
  return is.all.email(email)
}

if(typeof exports !== 'undefined') {
    global.is = require('is_js');
    exports.isOverLimitedEmail = isOverLimitedEmail;
    exports.stringEmailListToArray = stringEmailListToArray;
    exports.checkAllRecipientIsValid = checkAllRecipientIsValid;
    exports.isOver500Character = isOver500Character;
    exports.isOver5000Character = isOver5000Character;
}

