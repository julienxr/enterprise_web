import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

export interface IPlanner {}

const Planner: React.FC<IPlanner> = () => {
  return (
    <div className="">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridWeek"
        nowIndicator={true}
        editable={true}
        initialEvents={[{ title: 'nice event', start: new Date() }]}
      />
    </div>
  );
};

export default Planner;
