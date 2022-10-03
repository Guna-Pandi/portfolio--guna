import React from 'react'
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion" 
import { Link } from 'react-scroll';

const Works = () => {
   const transition = { duration: 2, type: "spring" };
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@1,700&display=swap');
</style>

<div className="wawesome">
            <span  style ={{color : darkMode? 'white' : ''}}>Works for All these</span>
            <span>Brands & Clients</span>
            <span style ={{color : darkMode? 'white' : ''}}>
                I'm interested in problem solving.
                 <br/> 
                I am very enthusiastic in Frontend web development.
                <br/>   
                I would like to learn more on App development.
                <br/>
                I am a Computer Science student wanting to enrich my knowledge on computer science as well.
            </span>
            <Link to="contact" spy={true} smooth={true}>

           <button className='button h-button'>Hire Me</button></Link>
            <div className='blur s-blur1' style={{background:"#abf1ff94"}}></div>
            <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
        </div>
      {/**right side */}
      
      <div className='w-right'>
      <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
         <div className='w-secCircle'>
            <img src={Upwork} alt=""/>
          </div>
         <div className='w-secCircle'>
            <img src = {Fiverr} alt=""/>
         </div>
         <div className='w-secCircle'>
            <img src={Amazon} alt=""/>
         </div>
         <div className='w-secCircle'>
            <img src={Shopify} alt=""/>
         </div>
         <div className='w-secCircle'>
            <img src={Facebook} alt=""/>
         </div>
         </motion.div>
 {/**background color circle */}
         <div className='w-backCircle blueCircle'> </div>
         <div className='w-backCircle yellowCircle'> </div>
       </div>


    </div>
  )
}

export default Works
