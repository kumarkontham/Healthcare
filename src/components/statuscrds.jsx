import React from "react";
import lungs from '../assets/lungs.png';
import tooth from '../assets/tooth.png';
import zeroa from '../assets/zeroa.png';
const cards = [
  {  image: lungs ,title: 'Lungs', date: '24 may 2025', color: '#FD1D1D', width:'75px' },
  { image:tooth, title: 'Teeth', date: '24 may 2025', color: '#57C785', width:'60px' },
  {  image:zeroa ,title: 'Bone', date: '24 may 2025', color: '#FD7A1D', width:'45px' }
];

function Statuscrds () {
    return(


  <div className="status" style={{marginTop:"70px", marginLeft:"65px", gap:"5px",position:"absolute",justifyContent:"space-between"}}>
    {cards.map((card) => (
      <div key={card.title} >
        <div style={{background:"#E1EAF2", padding:"2px 10px 10px 10px", marginBottom:"5px", borderRadius:"10px", width:"100px"}}>
            <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
        <img src={card.image} alt="" style={{width:"20px", height:"20px"}} />
          <h4 style={{fontFamily:"'Poppins', sans-serif",color:"#575454"}}>{card.title}</h4>
          </div>
          <span className="" style={{fontSize:"10px",color:"#8C8C8F"}}>Date: {card.date}</span>
        
        <div  style={{width:card.width,height:"7px", backgroundColor:card.color,borderRadius:"20px"}} ></div>
        </div>
      </div>
    ))}
  </div>
);
};

export default Statuscrds;