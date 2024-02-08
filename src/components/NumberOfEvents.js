import { useState } from "react";

const NumberOfEvents = ({ event }) => {
  const [NOE, setNOE] = useState('32');

  const handleInputChanged = (event) => {
    const value = 10;
    setNOE(value);
  }

  return (
    <div id='number-of-events'>
      <input
        type='text'
        value={NOE}
        onChange={handleInputChanged}
      >
      </input>

    </div>

  );
}

export default NumberOfEvents;