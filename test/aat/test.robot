*** Settings ***
Library           Selenium2Library
Library           XvfbRobot

*** Test Cases ***
Open Browser To Google
    Start Virtual Display    1920    1080
    Open Browser    http://google.co.th    
    Maximize Browser Window
    Input Text      lst-ib      test
    Press Key       lst-ib      \\13