import React from 'react';

// Styling for the HTML elements generated in this component
const styles = {
  h1: {
    textAlign: 'center',
  },
  div: {
    margin: 15,
  }, 
  form: {
    backgroundColor: '#bbccbd',
    margin: 20,
    padding: 10,
  }
};

// Generated the HTML to be displayed on the Contact page
export default function Contact() {
  return (
    <div >
      <h1 style={styles.h1}>Contact Page</h1>

      <form style={styles.form}>
        <div className="form-group" style={styles.div}>
          <label>Enter your name</label>
          <input type="input" className="form-control" id="exampleFormControlInput2" />
        </div>
                
        <div className="form-group" style={styles.div}>
          <label>Enter your email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
     
        <div className="form-group" style={styles.div}>
          <label>Enter your message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <div style={styles.div}>
          <button type="submit" className="btn btn-secondary btn-lg">Submit</button>
        </div>
      </form>





    </div>
  );
}
