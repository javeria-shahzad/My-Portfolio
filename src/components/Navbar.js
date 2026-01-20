import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar-minimal">
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a
        className="nav-btn"
        href="https://github.com/javeria-shahzad"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </nav>
  );
}
