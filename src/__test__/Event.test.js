import { render } from '@testing-library/react';
import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();

    // Pass the first event from allEvents as a prop to the Event component
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  //Title is under the .summary of the event data
  test('shows event title', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  //start time is under the .created of the event data
  test('shows event start time', () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });

  //start time is under the .location of the event data
  test('shows event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  //make sure to watch capitalization for test to work
  test('renders event details button with the title "show details"', () => {
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  })

});
