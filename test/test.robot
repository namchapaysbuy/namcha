*** Settings ***
Library           Selenium2Library

*** Test Cases ***
Open Browser To Google
    Open Browser    http://google.co.th    
    Maximize Browser Window
    Input Text      lst-ib      test
    Press Key       lst-ib      \\13