import React from "react";
import human_body from '../assets/human_body.jpg';
function Anatomy () {
    return(
        <div style={{ height:"auto" ,width: '100%', margin:"5% 5% 5% 30%" }}>
            <h2 style={{color:"#39d8e8",fontFamily:"'Poppins', sans-serif"}}>Dashboard</h2>
            <img src={human_body} alt="human" style={{width:"210px", height:"310px", borderRadius:"10px", color:"#E1EAF2"}} />
            <div className="status" style={{
        position: 'absolute',
        top: '300px',
        left: '522px',
        background: '#5a67d8',
        color: '#fff',
        padding: '5px 5px',
        borderRadius: '12px'
      }}>&#129505; Healthy Heart</div>
      <div className="status" style={{
        position: 'absolute',
        bottom: '285px',
        left: '340px',
        background: '#BCE8CB',
        color: '#303030',
        padding: '5px 10px',
        borderRadius: '12px',

      }}>&#129460; Healthy Leg</div>
        </div>
    );
};
export default Anatomy;