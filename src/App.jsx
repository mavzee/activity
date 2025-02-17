import React from "react";
import "./App.css";
 

const HeroBanner = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>
          Ivan <span className="highlight">Guerrero</span>
        </h1>
        <p>
        I’m Ivan, a passionate front-end developer aspirant focused on building beautiful, responsive web experiences. With a strong foundation in HTML, CSS, JavaScript, and React, I’m always learning new technologies to create dynamic and user-friendly interfaces. Let's bring creative ideas to life on the web!


        </p>
        <button className="hero-button">Learn More</button>
      </div>
    </div>
  );
};

export default HeroBanner;
