import React, { Component } from 'react';
import './App.css';
import Background from './components/Background';
import profileUrl from './assets/images/profile.png';
import githubUrl from './assets/images/github.png';
import linkedinUrl from './assets/images/linkedin.png';
import emailUrl from './assets/images/email.png';
import resumeUrl from './assets/images/resume.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={profileUrl} className="App-logo" alt="logo" />
          <h1 className="App-text">
            Hey! I'm Max <span role='img' aria-label='wave'>👋</span>
          </h1>
          <h4 className="App-text">
            I'm here to write code and chew bubble gum, and I don't type with my mouth so I can do both at the same time.
          </h4>
          <h4 className="App-text">
            I work on all parts of the stack, and blockchain too! Hit me up for any and all contracting inquiries at blaushmild@gmail.com
          </h4>
          <div>
            <a href='https://github.com/MaxBlaushild'>
              <img className='App-img' src={githubUrl} alt='github' />
            </a>
            <a href='https://www.linkedin.com/in/maxblaushild/'>
              <img className='App-img' src={linkedinUrl} alt='linkedin' />
            </a>
            <a href='mailto:blaushmild@gmail.com'>
              <img className='App-img' src={emailUrl} alt='email'/>
            </a>
            <a href='https://docs.google.com/document/d/15uyI4pOxXB7tlMVj9sf95XeYiRA2882iFWcFuMLyO_s/edit?usp=sharing'>
              <img className='App-img' src={resumeUrl} alt='resume'/>
            </a>
          </div>
          <Background />
        </header>
      </div>
    );
  }
}

export default App;
