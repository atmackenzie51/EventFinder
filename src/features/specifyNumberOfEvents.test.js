import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn\'t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
    given('user hasn\'t specified a number of events', () => {

    });

    when('the user opens the app', () => {

    });

    then('the user should see the list of 32 events by default', () => {

    });
  });


  test('User can change the number of events displayed.', ({ given, when, then }) => {
    given('the user has typed in desired number of events', () => {

    });

    when('the events list is loaded', () => {

    });

    then('the number of events match user typed number of events', () => {

    });
  });
});
