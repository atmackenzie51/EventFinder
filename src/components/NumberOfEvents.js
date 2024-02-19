import { useState, React } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {

  const handleInputChanged = (event) => {
    const value = event.target.value;
    if (value > 0) {
      setCurrentNOE(value)
    }
  };

  return (
    <div id='number-of-events'>
      <label>Number of Events:</label>
      <input
        type='text'
        defaultValue='32'
        onChange={handleInputChanged}
      >
      </input>

    </div>

  );
}

export default NumberOfEvents;