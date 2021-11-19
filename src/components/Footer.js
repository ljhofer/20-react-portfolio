import React from "react";
import githubImage from '../images/github.png';
import twitterImage from '../images/twitter.png';
import linkedinImage from '../images/linkedin.png';


const styles = {
    // div: {
    //   display:'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    h2: {
      textAlign: 'center',
      margin: 25
    },
    img: {
      margin: 25,
    }
  };

export default function Footer () {

    return (
      <div>
        <h2 style={styles.h2}> Created by Laura Hofer</h2>
        <a href='https://github.com/ljhofer' target="_blank"><img src={githubImage} alt='GitHub logo' style={styles.img}/></a>
        <a href='http://twitter.com/Lolobeanshofer' target="_blank"><img src={twitterImage} alt='GitHub logo' style={styles.img}/></a>
        <a href='' target="_blank"><img src={linkedinImage} alt='GitHub logo' style={styles.img}/></a>
      </div>  
    )
};

