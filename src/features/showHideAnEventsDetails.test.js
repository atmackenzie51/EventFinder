import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    given('the main page is open', () => {
      AppComponent = render(<App />);
    });

    when('the app displays the list of events', async () => {
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    then('the event details should be hidden by default', () => {
      AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector('.event-details');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test('User can click an event to show details.', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;
    given('the event has hidden details', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      expect(EventComponent.container.querySelector('.event-details')).not.toBeInTheDocument();
    });

    when('the user clicks the "Show Details" button', async () => {
      const showDetails = EventComponent.queryByText("Show Details");
      const user = userEvent.setup();
      await user.click(showDetails);
    });

    then('the event details are shown.', () => {
      expect(EventComponent.container.querySelector('.event-details')).toBeInTheDocument();
      expect(EventComponent.queryByText("Hide Details")).toBeInTheDocument();
    });
  });

  test('User can collapse an event to hide details.', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;
    let user;
    given('the event is showing details', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);

      const showDetails = EventComponent.queryByText("Show Details");
      user = userEvent.setup();
      await user.click(showDetails);
      expect(EventComponent.container.querySelector('.event-details')).toBeInTheDocument();
    });

    when('the user clicks the "Hide Details" button', async () => {
      const hideDetails = EventComponent.queryByText("Hide Details");
      user = userEvent.setup();
      await user.click(hideDetails);
    });

    then('the event details are hidden.', () => {
      expect(EventComponent.container.querySelector('.event-details')).not.toBeInTheDocument();
      expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
    });
  });
});
