*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported Selenium2Library.
Library           Selenium2Library

*** Variables ***
# ${SERVER}         ${URL}
# ${BROWSER}        Firefox
# ${DELAY}          0
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
    [Arguments]    ${inputToValue}      ${inputTopicValue}      ${inputBodyValue}
    Input Text    inputTo    ${inputToValue}
    Input Text    inputTopic    ${inputTopicValue}
    Input Text    inputBody    ${inputBodyValue}
