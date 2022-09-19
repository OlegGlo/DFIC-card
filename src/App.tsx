import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Fade } from "react-awesome-reveal";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function App() {
  return (
    <div className="App">
      <Fade delay={500}>
      
      <h1>Oleg Glotov</h1>
      <div className='links'>
        <a href="mailto:olegglotov99@gmail.com">
          <EmailIcon sx={{ fontSize: 55, color: 'black' }} />
        </a>
        <a href="https://www.linkedin.com/in/olegglotov/">
          <LinkedInIcon sx={{ fontSize: 55, color: 'black' }} />
        </a>
      </div>
      <h1>Reece Colclough</h1>
      <div className='links'>
        <a href="mailto:colclour@mcmaster.ca">
          <EmailIcon sx={{ fontSize: 55, color: 'black' }} />
        </a>
        <a href="https://www.linkedin.com/in/reececolclough/">
          <LinkedInIcon sx={{ fontSize: 55, color: 'black' }} />
        </a>
      </div>
      </Fade>
    </div>
  );
}

export default App;
