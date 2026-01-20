import React, { useState } from "react";

const projectData = [
  {
    id: 1,
    title: "MERN Todo App",
    desc: "Built a full-stack task tracker with authentication and CRUD operations.",
    link: "https://github.com/javeria-shahzad/mern-todo-app.git"
  },
  {
    id: 2,
    title: "E-Commerce Application (MERN)",
    desc: "Developed backend using Node.js & MongoDB, frontend in React, integrated APIs.",
    link: "https://github.com/javeria-shahzad/E-Cmmerece-Web-MERN.git"
  },
  {
    id: 3,
    title: "Recipe App (Frontend)",
    desc: "Responsive frontend with complete CRUD functionality and interactive UI.",
    link: "https://github.com/javeria-shahzad/Rcipe-frontend.git"
  },
  {
    id: 4,
    title: "Job Portal (MERN)",
    desc: "Full-stack job portal with role-based authentication, job posting, applications.",
    link: "https://github.com/javeria-shahzad/JobPortal-mern.git"
  },
];

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section id="projects" className="section">
      <h2 className="title">Projects</h2>
      <div className="grid">
        {projectData.map((p) => (
          <div key={p.id} className="card project" onClick={() => setOpen(p.id)}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      {open && (
        <div className="modal" onClick={() => setOpen(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{projectData.find(p => p.id === open).title}</h3>
            <p>{projectData.find(p => p.id === open).desc}</p>
            <a className="btn" href={projectData.find(p => p.id === open).link} target="_blank" rel="noreferrer">
              Open on GitHub
            </a>
            <button className="btn btn-secondary" onClick={() => setOpen(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
