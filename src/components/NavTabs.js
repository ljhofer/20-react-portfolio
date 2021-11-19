import React from 'react';

// Styling for the HTML elements generated with this component
const styles = {
  div: {
    margin: 20,
    background: '#8d968e',
    padding: 10,
  },
  p: {
    fontSize: 75,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center'
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
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

// Generates the header and nav tabs and detects which nav tab is open to the current page display and adds a clas of active to change the styling
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
