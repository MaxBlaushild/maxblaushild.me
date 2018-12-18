import React, { Component } from 'react';
import './App.css';
import Background from './components/Background';
import EmailIcon from '@material-ui/icons/Email';
import AttachmentIcon from '@material-ui/icons/Attachment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/profile.png" className="App-logo" alt="logo" />
          <h1 className="App-text">
            Hey! I'm Max 👋
          </h1>
          <h4 className="App-text">
            I'm here to write code and chew bubble gum, and I don't type with my mouth so I can do both at the same time.
          </h4>
          <h4 className="App-text">
            I work on all parts of the stack, and blockchain too! Hit me up for any and all contracting inquiries at blaushmild@gmail.com
          </h4>
          <div>
            <a href='https://github.com/MaxBlaushild'>
              <img className='App-img' src='/github.png' />
            </a>
            <a href='https://www.linkedin.com/in/maxblaushild/'>
              <img className='App-img' src='/linkedin.png' />
            </a>
            <a href='mailto:blaushmild@gmail.com'>
              <img className='App-img' src='/email.png' />
            </a>
            <a href='https://docs.google.com/document/d/15uyI4pOxXB7tlMVj9sf95XeYiRA2882iFWcFuMLyO_s/edit?usp=sharing'>
              <img className='App-img' src='/resume.png' />
            </a>
          </div>
          <Background />
        </header>
      </div>
    );
  }
}

export default App;
