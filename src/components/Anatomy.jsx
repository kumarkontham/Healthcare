import React from "react";
import human_body from '../assets/human_body.jpg';
function Anatomy () {
    return(
        <div style={{ height:"auto" ,width: '100%', margin:"5% 5% 5% 5%" }}>
            <h2>Dashboard</h2>
            <img src={human_body} alt="human" style={{width:"210px", height:"310px", borderRadius:"10px"}} />
            <div className="status" style={{
        position: 'absolute',
        top: '295px',
        left: '450px',
        background: '#5a67d8',
        color: '#fff',
        padding: '5px 10px',
        borderRadius: '12px'
      }}>&#129505; Healthy Heart</div>
      <div className="status" style={{
        position: 'absolute',
        bottom: '290px',
        left: '265px',
        background: '#BCE8CB',
        color: '#fff',
        padding: '5px 10px',
        borderRadius: '12px'
      }}>&#129460; Healthy Leg</div>
        </div>
    );
};
export default Anatomy;