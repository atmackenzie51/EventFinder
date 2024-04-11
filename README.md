# Project Description
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

# Using Serverless Functions in this Project
The project will use serverless functions to authenticate users, do real-time processing to meet user behavior, provide recommendations to users, and scale depending on the user base. 

# Project Features:
| Feature                 | Feature Scenarios                                                                    |
|:-----------------------:|:------------------------------------------------------------------------------------:|
|Filter Events by City   | #1: When user hasn't searched for a city, show upcoming events from all cities.     |
                          | #2: User should see a list of suggestions when they search for a city.                  |
                          | #3: User can select a city from the suggestion list. 

# Feature 2: Show/Hide Event Details
**Scenario 1**: An event element is collapsed by default.
**Scenario 2**: User can expand an event to see details.
**Scenario 3**: User can collapse an event to hide details.

## Feature 2 User Story:
As a user,
I should be able to show and hide event details
So that I can select which events I want further details for without seeing all of them.

## Feature 2 Gherkin Syntax:
**Scenario 1**: Given the system is in its default state
When the user views an event element
Then the event element should be collapsed

**Scenario 2**: Given the user is viewing an event element
When the user chooses to expand the event
Then the details of the event should be visible

**Scenario 3**: Given the user is viewing an expanded event element
When the user chooses to collapse the event
Then the details of the event should be hidden

# Feature 3: Specify Number of Events
**Scenario 1**: When user hasn’t specified a number, 32 events are shown by default.
**Scenario 2**: User can change the number of events displayed.

## Feature 3 User Story:
As a user,
I should be able to choose the number of events
So that I can be in control how how many events are on the display.

## Feature 3 Gherkin Syntax:
**Scenario 1**: Given the user has not specified a number of events to display
When the user views the events section
Then 32 events should be shown by default

**Scenario 2**: Given the user is viewing the events section
When the user chooses to change the number of displayed events
Then the number of events displayed should be updated accordingly

# Feature 4: Use the App When Offline
**Scenario 1**: Show cached data when there’s no internet connection.
**Scenario 2**: Show error when user changes search settings (city, number of events).

## Feature 4 User Story:
As a user, 
I should be able to use the app while offline
So that I do not need internet access to use the app.

## Feature 4 Gherkin Syntax:
**Scenario 1**: Given the system has cached data
And there is no internet connection
When the user attempts to access data
Then the system should display the cached data

**Scenario 2**: Given the user is accessing the search settings
When the user changes the search settings
Then the system should show an error message

# Feature 5: Add an App Shortcut to the Home Screen
**Scenario 1**: User can install the meet app as a shortcut on their device home screen.

## Feature 5 User Story:
As a user, 
I should be able to create a shortcut to the home screen, 
so that I can easily navigate to the home screen. 

## Feature 5 Gherkin Syntax:
**Scenario 1**: Given the user has the meet app installed on their device
When the user accesses the app settings or options
And selects the option to "Add to Home Screen"
Then a shortcut to the meet app should be created on the device home screen

# Feature 6: Display Charts Visualizing Event Details
**Scenario 1**: Show a chart with the number of upcoming events in each city

## Feature 6 User Story:
As a user, 
I should be able to display charts with event details
so that I can easily see what type of events are in each city.

## Feature 6 Gherkin Syntax:
**Scenario 1**: Given there are upcoming events in different cities
When the user requests to view a chart of upcoming events by city
Then the system should display a chart
And the chart should represent the number of upcoming events for each city
