*** Settings ***
Library           Selenium2Library

*** Test Cases ***               
Send button should enabled after all required input fields.
     Open Browser    ${URL}
     Maximize Browser Window 
     Input Text    inputTo    namcha@bot.com
     Input Text    inputTopic    This is a subject automate test
     Input Text    inputBody    This is a body automate test.
     Element Should Be Enabled    buttonSend
     Close Browser