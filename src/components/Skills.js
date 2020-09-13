import React from 'react';
import imgjs from '../img/javascript.svg';

const Skills = () => {
    return ( 
        <div className="jumbotron jumbotron-fluid" id="skill">
            <h1 className="display-3 title">HABILIDADES</h1>
            <div className="row">
                <div id="imgjs"className="col-12 col-md-6">
                    <img src={imgjs} className="img-fluid" alt=""/>
                </div>
                <div className="col-12 col-md-6 skills">
                    <div className="content mr-3 mb-2">HTML5</div>
                    <div className="progress mb-4">
                        <div className="progress-bar progress-bar-striped bg-danger html" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="content mr-3 mb-2">CSS3</div>
                    <div className="progress mb-4">
                        <div className="progress-bar progress-bar-striped bg-info css" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="content mr-3 mb-2">JavaScript</div>
                    <div className="progress mb-4">
                        <div className="progress-bar progress-bar-striped bg-warning js" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="content mr-3 mb-2">MySQL y MongoDB</div>
                    <div className="progress mb-4">
                        <div className="progress-bar progress-bar-striped  mysql" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="content mr-3 mb-2">React y NodeJS</div>
                    <div className="progress mb-4">
                        <div className="progress-bar progress-bar-striped bg-success react" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;