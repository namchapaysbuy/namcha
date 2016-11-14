*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported Selenium2Library.
Library           Selenium2Library

*** Variables ***
${URL}              http://localhost:3000/
# ${SERVER}         ${URL}
# ${BROWSER}        Firefox
# ${DELAY}          0.5
# ${VALID USER}     demo
# ${VALID PASSWORD}    mode
# ${LOGIN URL}      http://${SERVER}/
# ${WELCOME URL}    http://${SERVER}/welcome.html
# ${ERROR URL}      http://${SERVER}/error.html

*** Keywords ***
Open Browser And Maximize Window
    Open Browser    ${URL}
    Maximize Browser Window

Input All Fields
    [Arguments]     ${recipient}    ${topic}    ${body}
    Fill Email Recipients    ${recipient}
    Fill Email Topic         ${topic}
    Fill Email Body          ${body}

Open Email App
    Open Browser    ${URL}
    Title Should Be    Namcha e-mail
    #Maximize Browser Window 

Fill Email Recipients
    [Arguments]     ${inputToValue} 
    Input Text    inputTo    ${inputToValue}

Fill Email Topic
    [Arguments]     ${inputToValue} 
    Input Text    inputTopic    ${inputToValue}

Fill Email Body
    [Arguments]     ${inputBodyValue}
    Input Text    inputBody    ${inputBodyValue}

Not Allow To Send Email
    Element Should Be Disabled    buttonSend

Send Email
    Click Element      buttonSend
    
Send Successfully
    Element Text Should Be     inputTo     ${EMPTY}
    Element Text Should Be     inputTopic     ${EMPTY}
    Element Text Should Be     inputBody     ${EMPTY}