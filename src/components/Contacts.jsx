import React from "react";
import "../styles/Contacts.css";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
const Contacts = () => {
  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <div className="contacts">
        <div className="github">
          <h1>Projects</h1>
          <div
            className="button"
            onClick={() => handleLinkClick("https://github.com/yasarunylmzz")}
          >
            <span>
              <FiGithub />
            </span>
            <h3>Github Profile</h3>
          </div>
        </div>
        <div className="linkedin-instagram">
          <h1>Contacts</h1>
          <div className="buttons">
            <div
              className="button1"
              onClick={() =>
                handleLinkClick("https://www.instagram.com/yasarunylmz/")
              }
            >
              <span>
                <FiInstagram />
              </span>
              <h3>Instagram Profile</h3>
            </div>
            <div
              className="button2"
              onClick={() =>
                handleLinkClick(
                  "https://tr.linkedin.com/in/ya%C5%9Far-%C3%BCny%C4%B1lmaz-50b888226"
                )
              }
            >
              <span>
                <FiLinkedin />
              </span>
              <h3>Linkedin Profile</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
