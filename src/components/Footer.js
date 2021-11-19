import React from "react";

import { FaGithub, FaTwitterSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";


const styles = {
    footerIcon: {
      margin: 25,
      fontSize: '2em',
      color: 'black'
    },
    footer: {
      backgroundColor: '#8d968e',
    }
  };

export default function Footer () {

  // const handleMouseEnter = e => {
  //   e.target.style.color = "black"
  // } 
  // const handleMouseLeave = e => {
  //   e.target.style.color = "white"
  // }

    return (
      <footer style={styles.footer} className="footer">
        <div className="container text-center">
          <a 
              // onMouseEnter={handleMouseEnter} 
              // onMouseLeave={handleMouseLeave} 
              href="https://github.com/ljhofer" 
              target="_blank" rel="noreferrer">
                  <FaGithub style={styles.footerIcon}/>
          </a>
          <a 
              // onMouseEnter={handleMouseEnter} 
              // onMouseLeave={handleMouseLeave} 
              href="http://twitter.com/Lolobeanshofer" 
              target="_blank" rel="noreferrer">
                  <FaTwitterSquare style={styles.footerIcon} />
          </a>
          <a 
              // onMouseEnter={handleMouseEnter} 
              // onMouseLeave={handleMouseLeave} 
              href="https://www.linkedin.com/in/laura-hofer/" 
              target="_blank" rel="noreferrer">
                  <FaLinkedin style={styles.footerIcon} />
          </a>
          <a 
              // onMouseEnter={handleMouseEnter} 
              // onMouseLeave={handleMouseLeave} 
              href="mailto:ljhofer@gmail.com" 
              target="_blank" rel="noreferrer">
                  <FaEnvelope style={styles.footerIcon} />
          </a>
        </div>
      </footer>
    )
};

