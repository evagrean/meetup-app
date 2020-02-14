Feature: Specify number of Events

  Scenario: When user hasn't specified a number, 32 is the default number
    Given User has opened the app
    When User didn't change default number of events
    Then 32 events should be displayed

  Scenario: User can change the number of events they want to see
    Given User has opened the app
    And Default number of events should be displayed
    When User types desired number of events in textbox
    Then Desired number of events should be displayed

