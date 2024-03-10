import { React } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

  const handleInputChanged = (event) => {
    const value = event.target.value;

    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "Invalid input, please enter a numerical value greater than 0"
    } else {
      errorText = ""
      setCurrentNOE(value);
    }
    setErrorAlert(errorText);
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