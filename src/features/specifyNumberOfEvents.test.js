import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppComponent;
  let AppDOM;
  let NumOfEventsInputValue;
  test('When user hasn\'t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
    given('user hasn\'t specified a number of events', () => {

    });

    when('the user opens the app', () => {
      AppComponent = render(<App />);
    });

    then('the user should see the list of 32 events by default', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });


  test('User can change the number of events displayed.', ({ given, when, then }) => {
    given('the user has typed in desired number of events', async () => {
      AppComponent = render(<App />);
      const user = userEvent.setup();
      AppDOM = AppComponent.container.firstChild;
      const NumOfEventsDOM = AppDOM.querySelector('#number-of-events');
      const NumOfEventsInput = within(NumOfEventsDOM).queryByRole('textbox');
      await user.type(NumOfEventsInput, "{backspace}{backspace}10");

      // Convert the value to a number and store it in NumOfEventsInputValue
      NumOfEventsInputValue = parseInt(NumOfEventsInput.value, 10);
      expect(NumOfEventsInputValue).toBe(10);
    });

    when('the events list is loaded', () => {
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      expect(EventListDOM).toBeInTheDocument();
    });

    then('the number of events match user typed number of events', () => {
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toEqual(NumOfEventsInputValue);
    });
  });
});
