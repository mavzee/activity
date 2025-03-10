import React from "react";
import "./App.css";

const HeroBanner = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Introduction */}
        <h1>
          Ivan <span className="highlight">Guerrero</span>
        </h1>
        <p className="intro">
          I’m Ivan, a passionate front-end developer aspirant focused on building beautiful, responsive web experiences. With a strong foundation in HTML, CSS, JavaScript, and React, I’m always learning new technologies to create dynamic and user-friendly interfaces. Let's bring creative ideas to life on the web!
        </p>

        {/* Entered Contest */}
        <section className="section">
          <h2>Entered Contest</h2>
          <p>
            I recently participated in the <span className="highlight">Frontend Masters Challenge</span>, where I built a responsive portfolio website using React and advanced CSS animations. This experience honed my skills in creating visually stunning and performant web applications.
          </p>
        </section>

        {/* Skills & Expertise */}
        <section className="section">
          <h2>Skills & Expertise</h2>
          <ul className="skills-list">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js, Redux, and Next.js</li>
            <li>Responsive Design & Mobile-First Development</li>
            <li>UI/UX Design Principles</li>
            <li>Version Control (Git & GitHub)</li>
            <li>REST APIs & GraphQL</li>
          </ul>
        </section>

        {/* What You’re Currently Working On */}
        <section className="section">
          <h2>What I’m Currently Working On</h2>
          <p>
            I’m currently building a <span className="highlight">Task Management App</span> using React and Firebase. This project focuses on real-time data synchronization and user authentication, allowing teams to collaborate seamlessly.
          </p>
        </section>

        {/* Career Goals */}
        <section className="section">
          <h2>Career Goals</h2>
          <p>
            My goal is to become a <span className="highlight">Senior Frontend Developer</span>, contributing to innovative projects that push the boundaries of web development. I aspire to mentor junior developers and share my knowledge with the tech community.
          </p>
        </section>

        {/* Personal Touch */}
        <section className="section">
          <h2>Personal Touch</h2>
          <p>
            Fun Fact: I’m an avid gamer and love exploring open-world RPGs like <span className="highlight">The Witcher</span> and <span className="highlight">Elden Ring</span>. I also enjoy hiking and capturing nature photography during my trips. My dream is to visit Japan and experience its unique blend of tradition and technology.
          </p>
        </section>

        {/* Call to Action */}
        <section className="section">
          <h2>Let’s Connect!</h2>
          <p>
            If you’re looking for a dedicated and creative front-end developer, I’d love to hear from you! Let’s collaborate and build something amazing together.
          </p>
          <button className="hero-button">Contact Me</button>
        </section>
      </div>
    </div>
  );
};

export default HeroBanner;