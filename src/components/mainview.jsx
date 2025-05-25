import React from "react";
import '../styles/mainview.css';
import Dashboard from "./Dashboard";
import Calenderview from "./calenderview";
function Mainview(){
    return (
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",justifyContent:"space-evenly"}} > 
            <div>
            <Dashboard />
            </div>
            <div>
            
            <Calenderview />
            </div>
            
        </div>
    );
};
export default Mainview;