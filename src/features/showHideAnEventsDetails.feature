# Feature 2

Feature: Show/Hide Event Details
  Scenario: An event element is collapsed by default.
    Given the main page is open
    When the app displays the list of events
    Then the event details should be hidden by default

  Scenario: User can click an event to show details.
    Given the event has hidden details
    When the user clicks the "Show Details" button
    Then the event details are shown.

  Scenario: User can collapse an event to hide details.
    Given the event is showing details
    When the user clicks the "Hide Details" button
    Then the event details are hidden.