import React from "react";
import githubImage from '../images/github.png';
import twitterImage from '../images/twitter.png'


const styles = {
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
      <>
        <h2 style={styles.h2}> Created by Laura Hofer</h2>
        <a href='https://github.com/ljhofer' target="_blank"><img src={githubImage} alt='GitHub logo' style={styles.img}/></a>
        <a href='https://www.twitter.com' target="_blank"><img src={twitterImage} alt='GitHub logo' style={styles.img}/></a>
      </>  
    )
};

