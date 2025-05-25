import React from "react";
import Anatomy from './Anatomy';
import Statuscrds from "./statuscrds";
function Dashboard(){
    return(
        <div style={{display:"flex"}}>  
        <div style={{width:"300px",display:"inline-block"}}>
            <Anatomy /> 
            </div>
            <div style={{width:"200px"}}>
            <Statuscrds />  
            </div>         
        </div>
        
    );
};
export default Dashboard;