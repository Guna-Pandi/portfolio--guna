
import React from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";
import "./Card.css";


const Card = ({emoji, heading, detail, color}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   
    <div className="card" style={{borderColor: {color}}}> 
    <style>
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&display=swap');
</style>
      <img src={emoji} alt="" />
      <span style={{fontSize : "25px",fontWeight:"bold"}}>{heading}</span>
      <span style ={{color : darkMode? 'white' : ''}}>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;