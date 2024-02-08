import { useState } from "react";

const Event = ({ event }) => {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event" key={event.id} >
      <h1>{event.summary}</h1>
      <p>{event.created}</p>
      <p>{event.location}</p>
      {showDetails ?
        <p className='event-details'> {event.summary && event.description} </p>
        : null
      }

      <button onClick={() => { showDetails ? setShowDetails(false) : setShowDetails(true) }}>
        Show Details
      </button>
    </li>



  );
}

export default Event;