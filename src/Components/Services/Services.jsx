import React from 'react'
import './Services.css'
import gunacv from '../../pdf/GunaCV.pdf';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion" 


const Services = () => {
    const transition = { duration: 2, type: "spring" };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
         <style>
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@1,700&display=swap');
</style>
        {/*left side of the services */ }
        <div className="awesome">
            <span style ={{color : darkMode? 'white' : ''}}>My Awesome</span>
            <span>Services</span>
            <span style ={{color : darkMode? 'white' : ''}}>I'm interested in problem solving. <br/> 
                I am very enthusiastic in Frontend web development.<br/> I would like to learn more on App development.
                <br/>    I am a Computer Science student wanting to enrich my knowledge on computer science as well.
            </span>

           <a href={gunacv} download ={gunacv}  target='blank'><button className='button s-button'> Download CV </button></a> 
            <div className='blur s-blur1' style={{background:"#abf1ff94"}}></div>
            <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
            

        </div>
        {/*right  side of the services */ }
        <div className="cards" >
             {/**Firdt card  */}


             <motion.div
             initial={{ right: "25rem" }}
             whileInView={{ left: "30rem" }}
             transition={transition}
             style={{left:'10rem',} }>
                <Card 
                emoji={HeartEmoji}
                heading={'Design'}
                detail={"Figma, Proto.io, Sketch, Photoshop, Adobe, Adobe Xpress, Canva"}
                />
            </motion.div>

            {/**Second card  */}


           <motion.div 
           initial={{ top: "11rem", left: "25rem" }}
           whileInView={{ left: "12rem" }}
           transition={transition}           
           style={{top:"11rem",left:"12rem"}}>
                <Card
                emoji={Glasses}
                heading={"Developer"}
                detail={"Html, Css, JavaScript, ReactJS, Fultter, ReactNative"}
                />
            
            </motion.div>
            {/**Third card  */}

            <motion.div
             initial={{ right: "20rem" }}
             whileInView={{ left: "30rem" }}
             transition={transition}style={{top:"20rem",left:"25.5rem"}}>
                <Card
                emoji={Humble}
                heading={"UI/UX"}
                detail={"Sketch, Invision Studio, Proto.io, Webflow, Balsamiq, Axure"}
                color="rgba(252, 166, 31, 0.45)"
                />
            
            </motion.div>
          
            
            

         </div>
      
    </div>
  )
}

export default Services
