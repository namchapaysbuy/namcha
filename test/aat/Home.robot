*** Settings ***
Test Teardown    Close Browser
Resource          resource.robot

*** Test Cases ***               
# "Send" button should be enabled after all required inputs are not empty.
#      Open Browser And Maximize Window
#      Input All Fields    namcha@bot.com     This is a subject automate test     This is a body automate test.
#      Element Should Be Enabled    buttonSend

All inputs should be clear after click "Send" button.
     Open Browser And Maximize Window
     Input All Fields    namcha@bot.com     This is a subject automate test     This is a body automate test.
     Click Element      buttonSend
     Element Text Should Be     inputTo     ${EMPTY}
     Element Text Should Be     inputTopic     ${EMPTY}
     Element Text Should Be     inputBody     ${EMPTY}

# "Send" button should be disabled after only input "inputTo" filled.
#      Open Browser And Maximize Window
#      Input Text    inputTo    namcha@bot.com
#      Element Should Be Disabled    buttonSend

# "Send" button should be disabled after only input "inputTopic" filled.
#      Open Browser And Maximize Window
#      Input Text    inputTopic    test topic
#      Element Should Be Disabled    buttonSend

# "Send" button should be disabled after only input "inputBody" filled.
#      Open Browser And Maximize Window
#      Input Text    inputBody    test body
#      Element Should Be Disabled    buttonSend

# "Send" button should be disabled if all inputs are empty.
#      Open Browser And Maximize Window
#      Element Should Be Disabled    buttonSend