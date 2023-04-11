import React from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="name">{"My name is " + props.name}</h2>
          <h3 className="speed">{props.speed + " mph"}</h3>
          <p className="color">{"I am " + props.color}</p>
      </div>
  );
};

export default Card;