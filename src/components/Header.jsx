import React from 'react';
import '../styles/Header.css';
import profile from '../assets/profile.png';
import search from '../assets/search_icon.png'
import notification from '../assets/notification.png'
import plus from '../assets/plus.png'


function Header() {
  return (
    <header className="header">
      <div className="logo">Health<span class="two">Care.</span></div>
      <div className="search" >
      <img id='image1' src={search} alt="" /><input class="search-bar" type="text" placeholder="Search" readOnly />
      
      </div>
      <div class="headericons" style={{justifyContent:'space-between'}}>
         <img src={notification} alt="" class='notif' /> 
        <img src={profile}  alt="User Avatar" className="avatar" />
        <img src={plus} alt=""  style={{width:"36px"}} />
      </div>
    </header>
  );
}

export default Header;