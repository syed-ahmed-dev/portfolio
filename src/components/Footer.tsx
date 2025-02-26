import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <p className="text-sm">© {new Date().getFullYear()} Syed Muhammad Ahmed. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-3">
        <a
          href="https://github.com/syed-ahmed-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <GitHubIcon fontSize="medium" />
        </a>
        <a
          href="https://www.linkedin.com/in/syed-muhammad-ahmed-2236a0251/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <LinkedInIcon fontSize="medium" />
        </a>
        <a
          href="mailto:ssyedahmed31@gmail.com"
          className="hover:text-gray-400 transition duration-300"
        >
          <EmailIcon fontSize="medium" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
