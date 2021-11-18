import headshot from '../../images/blurred.png'


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
export default function About() {
  return (
    <>
      <h1 style={styles.h1}>About Me</h1>
      <div style={styles.div}>
        <img id='head-shot' src={headshot} alt='Laura Hofer' />
        <p style={styles.p}>
        After teaching elementary school for 11 years, I am looking forward to transitioning into a career in web development. I love to travel and learn about different cultures, explore nature, and sample new foods.  I am an avid reader and enjoy reading many genres. In addition, I am passionate about the ethical treatment of animals. I live in Minnesota with my husband, dog, cat, and two foster chickens.
        </p>
      </div>
    </>
  );
}
