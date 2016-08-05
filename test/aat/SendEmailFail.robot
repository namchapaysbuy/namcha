*** Settings ***
Test Setup      Open Email App
Test Teardown    Close Browser
Test Template       Send button must be disabled
Resource          resource.robot

*** Test Cases ***      Email                   Topic             Body
Invalid Email           namchabot@              ${EMPTY}          ${EMPTY}  
Empty Topic             namchabot@gmail.com     ${EMPTY}          ${EMPTY}
Empty Body              namchabot@gmail.com     pitsamai          ${EMPTY}

*** Keywords ***
Send button must be disabled
        [Arguments]     ${email}        ${topic}        ${body}
        Fill Email Recipients    ${email}
        Fill Email Topic    ${topic}
        Fill Email Body    ${body}
        Not Allow To Send Email

# *** Test Cases ***
# "Send" button must be disabled if fill only To.
#      Fill Email Recipients    namchabot@gmail.com
#      Not Allow To Send Email

# "Send" button must be disabled if fill only Topic.
#     Fill Email Topic    test send Email
#     Not Allow To Send Email

# "Send" button must be disabled if fill only Body.
#     Fill Email Body    this is message in body.... GGWP
#     Not Allow To Send Email

# "Send" button must be disabled if all fields are empty.
#     Not Allow To Send Email
