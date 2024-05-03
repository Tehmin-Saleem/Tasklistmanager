import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/style.css';

const localizer = dateFnsLocalizer();

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Complete Task',
      start: new Date(2024, 4, 2), // May 2nd, 2024
      end: new Date(2024, 4, 2), // May 2nd, 2024 (all-day event)
    },
    // Add more events as needed
  ]);

  return (
    <Calendar
      localizer={localizer}
      events={events}
      onEventResize={(event) => {
        // Handle event resize logic here
      }}
      onEventDrop={(event) => {
        // Handle event drop logic here
      }}
    />
  );
};

export default MyCalendar;