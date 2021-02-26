import React from 'react'

function Project() {
    return (
      <section className="projects">
        <h1
          style={{
            textAlign: "center",
            marginTop: "60px",
            marginBottom: "100px",
          }}
        >
          Featured Project
        </h1>

        <div className="project-content">
            <div className="project-card">
                this is a card
            </div>
          <img
            className="computer"
            src="composition.png"
            alt="projects-image"
          />
        </div>
      </section>
    );
}

export default Project
