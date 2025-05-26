import React from "react";
import '../styles/mainview.css';
import Dashboard from "./Dashboard";
import Calenderview from "./calenderview";
import UpcomingSchedule from "./upcomming";
import ActivityFeed from "./activity";
function Mainview(){
    return (
        <div  className="maingrid"  > 
            <div>
            <Dashboard />
            </div>
            <div>
            
            <Calenderview />
            </div>
            <div>
                <UpcomingSchedule />
            </div>
            <div>
                <ActivityFeed />
            </div>
            
        </div>
    );
};
export default Mainview;