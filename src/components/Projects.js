import React from 'react';
import Card from './Card';

import projects from '../services/projects';

const Projects = () => {
    return ( 
        <div className="jumbotron jumbotron-fluid" id="projects">
            <h1 className="display-3 title">PROYECTOS</h1>
            <div className="row">
                {projects.map((project) => (
                    <Card
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                    />
                )
                )}
            </div>
        </div>
     );
}
 
export default Projects;