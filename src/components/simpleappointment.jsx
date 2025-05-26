import React from 'react';


function  SimpleAppointmentCard  ({ title, time, icon })  {
    return (
        
  <div className="appointment-card" style={{margin:"5px", gap:"10px"}}>
    <div className="appointment-title" style={{display:"flex",alignItems:"center",gap:"8px",}}>
      {title} <img src={icon} alt=""  style={{width:"18px"}} />
    </div>
    <div className="appointment-time">{time}</div>
  
  </div>
);
};

export default SimpleAppointmentCard;
