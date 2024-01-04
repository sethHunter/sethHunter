// HomePage.js
import React from 'react';

const ProjectsPage = () => {
  return (
    <div>
      <div>
        <h1>
        <a href={'https://github.com/sethHunter/Calculator'}>
        Here
        </a>
        &nbsp;is my calculator project.
      </h1>
      <img
        src={'/images/Calculator.png'}
        alt='Add to Cart'
        style={{ width: '50%', height: '50%', objectFit: 'cover' }}
      />
      </div>
    </div>
  );
};

export default ProjectsPage;