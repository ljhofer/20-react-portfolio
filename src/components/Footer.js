import React from "react";
import githubImage from '../images/github.png';
import twitterImage from '../images/twitter.png';
import linkedinImage from '../images/linkedin.png';


const styles = {
    h2: {
      textAlign: 'center',
      margin: 25
    },
    img: {
      margin: 25,
    }, 
    div: {
      justifyContent: 'center',
    }
  };

export default function Footer () {

    return (
      <div style={styles.div}>
        <a href='https://github.com/ljhofer' target="_blank" rel="noreferrer"><img src={githubImage} alt='GitHub logo' style={styles.img}/></a>
        <a href='http://twitter.com/Lolobeanshofer' target="_blank" rel="noreferrer"><img src={twitterImage} alt='GitHub logo' style={styles.img}/></a>
        <a href='https://www.linkedin.com/in/laura-hofer/' target="_blank" rel="noreferrer"><img src={linkedinImage} alt='GitHub logo' style={styles.img}/></a>
      </div>  
    )
};

