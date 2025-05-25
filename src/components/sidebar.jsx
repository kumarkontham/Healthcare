import React from 'react';
import '../styles/sidebar.css';
import {
  FaThLarge, FaHistory, FaCalendarAlt, FaClipboardList,
  FaChartBar, FaComments, FaPhoneAlt, FaCog
} from 'react-icons/fa';

function Sidebar  ()  {
  return (
    <div className="sidebar">
      <div className="section">
        <p className="section-title">General</p>
        <NavItem icon={<FaThLarge />} label="Dashboard" active />
        <NavItem icon={<FaHistory />} label="History" />
        <NavItem icon={<FaCalendarAlt />} label="Calendar" />
        <NavItem icon={<FaClipboardList />} label="Appointments" />
        <NavItem icon={<FaChartBar />} label="Statistics" />
      </div>

      <div className="section">
        <p className="section-title">Tools</p>
        <NavItem icon={<FaComments />} label="Chat" />
        <NavItem icon={<FaPhoneAlt />} label="Support" />
      </div>

      <div className="section setting">
        <NavItem icon={<FaCog />} label="Setting" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active }) => (
  <div className={`nav-item ${active ? 'active' : ''}`}>
    <span className="icon">{icon}</span>
    <span className="label">{label}</span>
  </div>
);

export default Sidebar;
