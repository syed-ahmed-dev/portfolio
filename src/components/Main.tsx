import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQHMQZJHMnGYGQ/profile-displayphoto-shrink_200_200/B4EZU.BSh_HgAY-/0/1740502280836?e=1746057600&v=beta&t=8k0sFMnLR4g3HzZziMRMOYrUX3B9sy9qRrJI8HrDDdI" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/syed-ahmed-dev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/syed-muhammad-ahmed-2236a0251/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h2>Syed Muhammad Ahmed</h2>
          <p>Backend Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/syed-ahmed-dev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/syed-muhammad-ahmed-2236a0251/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;