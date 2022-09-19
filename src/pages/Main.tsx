/*users.jsx*/
import React from "react";
import { Fade } from "react-awesome-reveal";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
/* We simply can use an array and loop and print each user */
const Main = () => {
  return (
    <div>
      <div className="Main">
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
    </div>
  );
};

export default Main;