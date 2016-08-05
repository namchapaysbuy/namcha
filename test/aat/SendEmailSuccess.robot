*** Settings ***
Test Teardown    Close Browser
Resource          resource.robot

*** Test Cases ***
All inputs must be clear after click "Send" button.
     Open Browser And Maximize Window
     Fill Email Recipients    namcha@bot.com
     Fill Email Topic    This is a subject automate test
     Fill Email Body    This is a body automate test.
     Send Email
     Send Successfully