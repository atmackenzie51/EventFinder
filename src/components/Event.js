import { useState } from "react";

const Event = ({ event }) => {

  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }

  return (
    <li className="event" key={event.id} >
      <h1>{event.summary}</h1>
      <p>{event.created}</p>
      <p>{event.location}</p>
      {showDetails &&
        <p className='event-details'> {event.summary && event.description} </p>
      }

      <button className='details-btn' onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </li>

  );
}

export default Event;