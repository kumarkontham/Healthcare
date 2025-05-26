import React from 'react';
import '../styles/activity.css';

const ActivityFeed = () => {
  // Sample bar heights for visual effect
  const barHeights = [40, 60, 100, 80, 30, 50, 90]; // heights in px for Mon-Sun

  return (
    <div className="activity-feed">
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between", position:"relative"}}>
      <h1 className="activity-title"style={{fontFamily:"'Poppins', sans-serif"}}>Activity</h1>
      <span className="activity-subtitle">3 appointments on this week</span>
      </div>

      <div className="bar-chart" >
        {barHeights.map((height, index) => (
          <div
            key={index}
            className="bar"
            style={{ height: `${height}px`, width:"10px" }}
            title={`Day ${index + 1}`}
          ></div>
        ))}
      </div>

      <div className="bar-labels">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
          <span key={index} className="bar-label">{day}</span>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
