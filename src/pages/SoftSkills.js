import React from "react";

export default function SoftSkills() {
  return (
    <section id="softskills" className="section">
      <h2 className="title">Soft Skills</h2>
      <div className="grid">
        {["Communication", "Teamwork", "Problem Solving", "Time Management"].map((skill, i) => (
          <div key={i} className="card">{skill}</div>
        ))}
      </div>
    </section>
  );
}
