import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';


describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test('element contains "textbox" role', () => {
    const eventTextBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(eventTextBox).toBeInTheDocument();
  })

  test('element has a default search value of 32 events', () => {
    const eventTextBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(eventTextBox).toHaveValue('32');
  })

  test('element value changes according to user', async () => {
    const user = userEvent.setup();
    const eventTextBox = NumberOfEventsComponent.queryByRole('textbox');

    await user.type(eventTextBox, "{backspace}{backspace}10");
    expect(eventTextBox).toHaveValue('10');
  })


})