const Event = ({ event }) => {
  return (
    <li className="event" key={event.id} >
      <h1>{event.summary}</h1>
      <p>{event.created}</p>
      <p>{event.location}</p>
      <button>
        Show Details
      </button>
    </li>



  );
}

export default Event;