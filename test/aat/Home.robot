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

All label should be correct.
     Open Browser And Maximize Window
     Element Text Should Be     lblInputTo     To
     Element Text Should Be     lblInputTopic     Topic
     Element Text Should Be     lblInputBody     Body

"Send" button should be disabled after only input "inputTo" filled.
     Open Browser And Maximize Window
     Input Text    inputTo    namcha@bot.com
     Element Should Be Disabled    buttonSend

"Send" button should be disabled after only input "inputTopic" filled.
     Open Browser And Maximize Window
     Input Text    inputTopic    test topic
     Element Should Be Disabled    buttonSend

"Send" button should be disabled after only input "inputBody" filled.
     Open Browser And Maximize Window
     Input Text    inputBody    test body
     Element Should Be Disabled    buttonSend

"Send" button should be disabled if all inputs are empty.
     Open Browser And Maximize Window
     Element Should Be Disabled    buttonSend

"Send" button should be enabled when input "inputTo" by 51 emails 
     Open Browser And Maximize Window
     Input All Fields    abc1@abc1.com, abc2@abc2.com, abc3@abc3.com, abc4@abc4.com, abc5@abc5.com, abc6@abc6.com, abc7@abc7.com, abc8@abc8.com, abc9@abc9.com, abc10@abc10.com, abc11@abc11.com, abc12@abc12.com, abc13@abc13.com, abc14@abc14.com, abc15@abc15.com, abc16@abc16.com, abc17@abc17.com, abc18@abc18.com, abc19@abc19.com, abc20@abc20.com, abc21@abc21.com, abc22@abc22.com, abc23@abc23.com, abc24@abc24.com, abc25@abc25.com, abc26@abc26.com, abc27@abc27.com, abc28@abc28.com, abc29@abc29.com, abc30@abc30.com, abc31@abc31.com, abc32@abc32.com, abc33@abc33.com, abc34@abc34.com, abc35@abc35.com, abc36@abc36.com, abc37@abc37.com, abc38@abc38.com, abc39@abc39.com, abc40@abc40.com, abc41@abc41.com, abc42@abc42.com, abc43@abc43.com, abc44@abc44.com, abc45@abc45.com, abc46@abc46.com, abc47@abc47.com, abc48@abc48.com, abc49@abc49.com, abc50@abc50.com, abc50@abc51.com     This is a subject automate test     This is a body automate test.
     Element Should Be Enabled    buttonSend
     Click Element    buttonSend
     ${popOverText}=    Get Text    xpath=//div[@class='popover-content']
     Should Be Equal As Strings    ${popOverText}     Vivamus sagittis lacus vel augue laoreet rutrum faucibus.

# Add recipient button should be have icon.
#      ${style}= | Get Element Attribute | id=spIconUser@style