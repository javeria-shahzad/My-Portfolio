import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="title">Technical Skills</h2>
      <div className="grid">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "REST APIs",
          "JWT Authentication",
          "Git & GitHub",
          "MongoDB Compass",
          "Postman",
        ].map((skill, index) => (
          <div key={index} className="card">{skill}</div>
        ))}
      </div>
    </section>
  );
}
