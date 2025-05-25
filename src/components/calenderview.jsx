import React from "react";
import '../styles/calender.css';
import tooth from '../assets/tooth.png';
function Calenderview(){  //calender function
    return (
        <div className="calendar-container" style={{height:"auto" ,width:"400px"}}>
  <h2 className="calendar-title">May 2025</h2>
  <div className="calendar-grid">
    {[...Array(7)].map((_, i) => (
      <div key={i} className="calendar-day-name">
        {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}
      </div>
    ))}
    {[...Array(31)].map((_, i) => (
      <div
        key={i}
        className={`calendar-day ${i === 25 ? 'calendar-day-highlight' : ''}`}
      >
        {i + 1}
      </div>
    ))}
  </div>

  <div className="appointment-list">
    <div className="appointment-card appointment-blue">
        
      <strong>Dentist</strong><img src={tooth} alt="" style={{width:"20px", marginLeft:"80px"}} />
      <br/>09:00–11:00<br/>Dr. Cameron Williamson
    </div>
    <div className="appointment-card appointment-purple">
      <strong>Physiotherapy</strong><br/>11:00–12:00<br/>Dr. Kevin Djones
    </div>
  </div>
</div>

);
}

export default Calenderview;
 