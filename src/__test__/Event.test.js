import { render } from '@testing-library/react';
import Event from '../components/Event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
  let EventComponent;
  beforeEach(() => {
    // Pass the first event from mockData as a prop to the Event component
    EventComponent = render(<Event event={mockData[0]} />);
  });

  test('shows event title', () => {
    const eventTitle = mockData[0].summary
    expect(EventComponent.queryByText(eventTitle)).toBeInTheDocument();
  });

  test('shows event start time', () => {
    const eventTime = mockData[0].created
    expect(EventComponent.queryByText(eventTime)).toBeInTheDocument();
  });

  test('shows event location', () => {
    const eventLocation = mockData[0].location
    expect(EventComponent.queryByText(eventLocation)).toBeInTheDocument();
  });

  test('renders event details button with the title "show details"', () => {
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  })

});
