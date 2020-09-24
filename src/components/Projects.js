import React from 'react';
import Card from './Card';
import Tada from 'react-reveal/Tada';
import projects from '../services/projects';

const Projects = () => {
    return (
        <div className="jumbotron" id="projects">
            <Tada>
                <h1 className="display-3 title">PROYECTOS</h1>
            </Tada>
            <div className="row mx-auto">
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