// import resumeImage from '../../images/resume_11_21.pdf';


const styles = {
  h1: {
    textAlign: 'center'
  },
  div: {
    textAlign: 'center',
    // marginTop: 100,
    // marginLeft: 100,
  },
  p: {
    fontSize: 25,
  },
};

// TODO: Update for this homework
export default function Resume() {
  return (
    <div>
      <h1 style={styles.h}>Resume</h1>

      {/* <h3><a href={resumeImage} target="_blank">Resume</a></h3> */}
      
      <h3>Technical Skills</h3>
      <ul>
          <li>HMTL</li>
          <li>CCS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Express</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>React.js</li>
      </ul>
      
    </div>
  );
}
