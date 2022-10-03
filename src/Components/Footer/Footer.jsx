
import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Whatsapp  from "@iconscout/react-unicons/icons/uil-whatsapp";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" ,height:"22rem"}} />
      <div className="f-content">
        <span>gunapandidura@gmailcom</span>
        <div className="f-icons">
        <a href='https://www.instagram.com/guna3473?r=nametag '><Insta color="white" size={"3rem"} /></a>
          <a href=' https://wa.me/qr/Y54UPQ7GNAJ5P1 '><Whatsapp color="white" size={"3rem"} /></a>
          <a href='https://github.com/cybertut'><Gitub color="white" size={"3rem"} /></a>
          <a href='https://www.linkedin.com/in/guna-p-aa3357245?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvwLhP9h2QseR%2FCY%2BW6ZO6w%3D%3D'><LinkedIn color="white" size={"3rem"} /></a>

          

        </div>
      </div>
    </div>
  );
};

export default Footer;