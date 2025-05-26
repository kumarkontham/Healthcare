import React from 'react';
import SimpleAppointmentCard from './simpleappointment';


const ScheduleDay = ({ day, appointments }) => (
  <div className="schedule-day">
    <h3 className="schedule-day-title">On {day}</h3>
    <div className="schedule-cards-container" style={{display:"flex",gap:"15px",flexWrap:"wrap",borderRadius:"10px"}}>
        
      {appointments.map((appt, index) => (
       <div style={{backgroundColor:"#E1EAF2" ,borderRadius:"10px"}}>
        <SimpleAppointmentCard  key={index} {...appt} />
        </div>
      ))}
      
    </div>
  </div>
);

export default ScheduleDay;
