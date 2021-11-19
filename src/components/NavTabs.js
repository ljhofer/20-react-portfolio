import React from 'react';

const styles = {
  div: {
    margin: 20,
    background: '#8d968e',
    padding: 10,
  },
  p: {
    fontSize: 75,
    margin: 20,
    textAlign: 'center'
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // backgroundColor: '#bbccbd'
  },
  a: {
    textDecoration: 'none',
    display: 'inline',
    marginRight: 7,
    marginLeft: 7,
    fontSize: 25,
    color: 'white',
  },
};

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
//  Destructuring those two props 

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={styles.div}>
      <p style={styles.p}>Laura Hofer</p>
      
      <nav style={styles.nav}>   
        <a style={styles.a} href="#about" onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
      
        <a style={styles.a} href="#portfolio" onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
      
        <a style={styles.a} href="#contact" onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
      
        <a style={styles.a} href="#resume" onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
      </nav>
    </div>
  );
}

export default NavTabs;
