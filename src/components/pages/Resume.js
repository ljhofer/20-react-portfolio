import resumeImage from '../../images/resume_11_21.pdf';
import resumeScreenShot from '../../images/resumeScreenShot.png';

// Styling for the HTML elements generated in this component
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
  img: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  uldiv: {
    justifyContent: 'center',
    marginLeft: '20%',
    marginRight: '15%',
    marginBottom: 30
  },
  ul: {
    display: 'inline',
    justifyContent: 'center',
  },
};

// Generates the HTML that displays in the Resume page
export default function Resume() {
  return (
    <div>
      <h1 style={styles.h1}>Resume</h1>

      <a href={resumeImage} target="_blank" rel='noreferrer'><img src={resumeScreenShot} alt="Resume" style={styles.img}/></a>
      
      <div>
        <h2 style={styles.h2}>Technical Skills</h2>
        <div className='row d-flex justify-content-center'>
          <div className='col-4' >
            <div style={styles.uldiv}>
              <ul style={styles.ul}>
                  <li>HMTL</li>
                  <li>CCS</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
              </ul>
            </div>
          </div>
          <div className='col-4'> 
            <div style={styles.uldiv}>
              <ul style={styles.ul}>
                  <li>Express</li>
                  <li>Node.js</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>React.js</li>
              </ul>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}
