import React from 'react'
import "./Intro.css";

import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion" 
import { Link } from 'react-scroll';



const Intro = () => {
    const transition = { duration: 2, type: "spring" };

const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   
    <div className='intro'>
         <style>
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&display=swap');
</style>
        <div className='i-left'>
            <div className='i-name'>
                <span style ={{color : darkMode? 'white' : ''}} >Hey! I Am </span>
                <span>Guna Pandithurai</span>
                <span style ={{color : darkMode? 'white' : ''}}>Frontend Developer with high level of Creative Thinking in Web Designing and Development, Producting the Quality work</span>
            </div>
            <Link to="contact" spy={true} smooth={true}>
            <button className="button i-button">Hire Me</button></Link>
            <div className='i-icons' >
                <a href='https://github.com/cybertut'><img src={Github} alt=""/></a>
                <a href='https://www.linkedin.com/in/guna-p-aa3357245?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvwLhP9h2QseR%2FCY%2BW6ZO6w%3D%3D'><img src={LinkedIn} alt=""/></a> 
                <a href='https://www.instagram.com/guna3473?r=nametag '><img src={Instagram} alt=""/></a>
            </div>
        </div>
        <div className='i-right'>
            
            <img src={Vector1} alt=""/>
            <img src={Vector2} alt=""/>
            <img src={boy} alt=""/>
            <motion.img
          initial={{ left: '-20%' }}
          whileInView={{ left: '24%' }}
          transition={transition} 
          src={glassesimoji} 
          alt=""
          />

            <motion.div 
            initial={{top:'-4%',left:'50%'}}
            whileInView={{left:'75%'}}
            transition={transition} 
            style={{top:'-4%',left:'71%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>


            <motion.div 
            initial={{left:'5rem',top:'16rem'}}
            whileInView={{left:'12rem'}}
            transition={transition}
            style={{top:'50.5%',left:'28%'}} >
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </motion.div>


            {/* blur dividion */}
       
    
        </div>
    </div>
  )
}

export default Intro
