# Feature 3

Feature: Specify number of events
  Scenario: When user hasn't specified a number, 32 events are shown by default.
    Given user hasn't specified a number of events
    When the user opens the app
    Then the user should see the list of 32 events by default

  Scenario: User can change the number of events displayed.
    Given the user has typed in desired number of events
    When the events list is loaded
    Then the number of events match user typed number of events