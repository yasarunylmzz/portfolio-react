import React from "react";
import "../styles/Home.css";
import profilePhoto from "../assets/photo.jpeg";

const Home = () => (
  <div className="container">
    <div className="home">
      <div className="text-site">
        <h1 className="name">Hello, I'm Yasar 👋</h1>
        <p>
          I am a Computer Engineer at Bolu Abant İzzet Baysal University
          <br />
          and currently learning React.js ,Flutter, Dart, Python, Node.js.
          <br />
          When I graduate, I want to do a master's in data science.
        </p>
      </div>
      <div className="profile-photo">
        <img src={profilePhoto} alt="" />
      </div>
    </div>
  </div>
);

export default Home;
