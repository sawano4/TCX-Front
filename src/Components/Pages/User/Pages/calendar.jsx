import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const isCurrentDay = (dateToCheck) => {
    const today = new Date();
    return (
      dateToCheck.getDate() === today.getDate() &&
      dateToCheck.getMonth() === today.getMonth() &&
      dateToCheck.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date }) => (isCurrentDay(date) ? 'bg-blue-500 text-white rounded-lg' : null)}
      />
    </div>
  );
};

export default MyCalendar;
