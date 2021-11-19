import React from 'react';

const styles = {
  div: {
    margin: 20,
    background: '#8d968e',
    // width: '100%',
    // display: 'flex',
    // flexWrap: 'wrap',
    // minHeight: 50,
    // lineHeight: 3.5,
    // fontSize: '1.2rem',
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
  },
  a: {
    textDecoration: 'none',
    display: 'inline',
    marginRight: 7,
    marginLeft: 7,
    fontSize: 35,
    color: 'white',
  },
};

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
//  Destructuring those two props 

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={styles.div}>
      <p style={styles.p}>Laura Hofer</p>
      {/* <ul className="nav nav-tabs" style={styles.ul}>
        <li className="nav-item" style={styles.li}> */}
      <nav style={styles.nav}>   
          <a style={styles.a}
            href="#about"
            onClick={() => handlePageChange('About')}
            //*  TODO:
              
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        {/* </li>
        <li className="nav-item" style={styles.li}> */}
          <a style={styles.a}
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            //  TODO: Add a comment explaining what this logic is doing

            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        {/* </li>
        <li className="nav-item" style={styles.li}> */}
          <a style={styles.a}
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            //  TODO: Add a comment explaining what this logic is doing

            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        {/* </li>
        <li className="nav-item" style={styles.li}> */}
          <a style={styles.a}
            href="#resume"
            //  TODO: Add a comment explaining what this logic is doing

            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
      </nav>
        {/* </li>
      </ul> */}
    </div>
  );
}

export default NavTabs;
