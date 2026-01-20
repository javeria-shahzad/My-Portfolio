import React from "react";

export default function Home() {
  return (
    <section id="home" className="home-compact">
      <div className="home-card">
        <h1 className="name">Javeria Shahzad</h1>
        <h2 className="role">MERN Stack Developer</h2>
        <p className="intro">
          I build full-stack applications using MongoDB, Express, React, and Node.js.
          Actively seeking an internship or junior role to contribute to real-world projects.
        </p>
        <a className="btn small-btn" href="#projects">View Projects</a>
      </div>
    </section>
  );
}
