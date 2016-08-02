*** Settings ***
Library           Selenium2Library

*** Test Cases ***               
Open Browser To Target Page
     Open Browser    http://localhost:3000/
     Maximize Browser Window