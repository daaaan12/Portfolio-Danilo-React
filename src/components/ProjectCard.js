
import React from 'react';

import '../scss/projectcard.scss';

function ProjectCard({ title, imageUrl, projectUrl, description }) {
  return (
    <div className="card-projeto">
      <div className="logo-cards">
        <a href={projectUrl}><img src={imageUrl} alt={title} width="100px" /></a>
      </div>
      <div>
        <div className="descricao-cards">
          <h2><a href={projectUrl}>{title}</a></h2>
          <div style={{ color: 'black' }}>
       
            <span className="badge-js">JavaScript</span>
            <span className="badge-html">HTML</span>
            <span className="badge-css">CSS</span>
         
          </div>
        </div>
        <p style={{ fontWeight: 900, color: 'rgb(255, 255, 255)' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
