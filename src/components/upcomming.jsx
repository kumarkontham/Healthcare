import React from 'react';
import ScheduleDay from './scheduleday';
import heart from '../assets/heart.png';
import neuro from '../assets/neurology.png';
import fullh from '../assets/healthcare.png';
import eye from '../assets/eye-exam.png';


const UpcomingSchedule = () => {
  const scheduleData = [
    {
      day: 'Thursday',
      appointments: [
        { title: 'Health checkup complete', time: '11:00 AM', icon:fullh },
        { title: 'Ophthalmologist', time: '14:00 PM', icon: eye },
      ],
    },
    {
      day: 'Saturday',
      appointments: [
        { title: 'Cardiologist', time: '12:00 AM', icon: heart },
        { title: 'Neurologist', time: '16:00 PM', icon: neuro },
      ],
    },
  ];

  return (
    <div className="upcoming-schedule" style={{backgroundColor:"#f8fcff",borderRadius:"20px",padding:"20px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.06)",margin:"10px", width:"450px" }}>
      <h2 className="upcoming-schedule-title" style={{fontFamily:"'Poppins', sans-serif"}}>The Upcoming Schedule</h2>
      <div style={{borderRadius:"10px"}}>
      {scheduleData.map((day, index) => (
        <ScheduleDay key={index} {...day} />
      ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
