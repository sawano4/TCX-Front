import React, { useState } from 'react';

const History = () => {
  const [events, setEvents] = useState([
    { id: 1, message: 'You have added a patient', timestamp: new Date() },
    // Add more historical events as needed
  ]);

  const addPatient = () => {
    const newEvent = {
      id: events.length + 1,
      message: 'You have added a patient',
      timestamp: new Date(),
    };

    setEvents([...events, newEvent]);
  };

  const deletePatient = () => {
    const newEvent = {
      id: events.length + 1,
      message: 'You have deleted a patient',
      timestamp: new Date(),
    };

    setEvents([...events, newEvent]);
  };

  return (
    <div>  
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.timestamp.toLocaleString()}:</strong> {event.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
