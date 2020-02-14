Feature: Show/hide an event's details

  Scenario: An event element is collapsed by default
    Given User has opened the app
    And List of Events has been loaded
    When User did not expand any event
    Then All event elements should be collapsed

  Scenario: User can expand an event to see its details
    Given User has opened the app
    And List of Events has been loaded
    When User clicks on details button for an event
    Then Event element will be expanded to show more details about the event

  Scenario: User can collapse an event to hide its details
    Given User has opened the app
    And User has expanded event's details
    When User clicks on show less button for an event
    Then Event element should be collapsed, details should be hidden
    And User should only see list of events