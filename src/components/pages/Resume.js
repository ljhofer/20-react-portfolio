import resumeImage from '../../images/resume_11_21.pdf';


const styles = {
  h1: {
    textAlign: 'center',
    marginBottom: 20,
  },
  h2: {
    textAlign: 'center',
    margin: 10,
    marginTop: 40,
  },
  h3: {
    textAlign: 'center',
    margin: 20,
  },
  resume: {
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: '#bbccbd',
    color: '#383d38',
    padding: 10,
  },
  uldiv: {
    justifyContent: 'center',
  },
  ul: {
    display: 'inline',
    justifyContent: 'center',
    marginLeft: 30,
  }
};

// TODO: Update for this homework
export default function Resume() {
  return (
    <div>
      <h1 style={styles.h1}>Resume</h1>

      <h3 style={styles.h3}><a href={resumeImage} style={styles.resume} target="_blank" rel='noreferrer'>Download Resume</a></h3>
      
      <div>
        <h2 style={styles.h2}>Technical Skills</h2>
        <div style={styles.uldiv} className='row d-flex'>
          <ul style={styles.ul} className='col-4'>
              <li>HMTL</li>
              <li>CCS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>jQuery</li>
          </ul>
          <ul style={styles.ul} className='col-4'>
              <li>Express</li>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>React.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
