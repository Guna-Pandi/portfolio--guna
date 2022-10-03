import React from 'react'
import Toogle from '../Toogle/Toogle';
import './Navbar.css';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@1,700&display=swap');
</style>
        <div className='n-left'>
            <div className='n-name'>Guna</div>
            <Toogle/>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul style={{listStyleType:'none'}}>
                <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}style={{fontWeight:"bold",fontSize:"25px"}}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true} style={{fontWeight:"bold",fontSize:"25px"}}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}style={{fontWeight:"bold",fontSize:"25px"}}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}style={{fontWeight:"bold",fontSize:"25px"}}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}style={{fontWeight:"bold",fontSize:"25px"}}>
                Testimonial
              </Link>
            </li>
                </ul>
            </div>
            
        <Link to="contact" spy={true} smooth={true}>
            <button className='button n-button' style={{fontWeight:"bold",fontSize:"20px"}}>Contact</button></Link>
        </div>
    </div>
  )
}

export default Navbar
