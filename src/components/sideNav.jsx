import React from 'react';
import { Link } from 'react-router-dom';
import './sideNav.css'
import peeking from './peeking.png'


const SideNav = () => (
  <div className="sidenav">
    <Link style={{color: 'white'}} to="/new"><h2>Create Crewmate!</h2></Link>
    <br></br>
    <Link style={{color: 'white'}} to="/"><h2>Crewmate Gallery</h2></Link>
    <br></br> 
    <img src={peeking} alt="peeking" className="peeking"></img>
  </div>
  
);

export default SideNav;