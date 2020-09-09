import React from 'react';

const Skills = () => {
    return ( 
        <div className="jumbotron jumbotron-fluid">
            <h1 className="display-3 title">HABILIDADES</h1>
            <div className="row">
                <div className="col-md-8">
                    <div className="content mr-3">
                        <label htmlFor="HTML5">HTML5</label>
                    </div>
                    <div class="progress  mb-4">
                    <div class="progress-bar progress-bar-striped html" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="content mr-3">
                        <label htmlFor="CSS3">CSS3</label>
                    </div>
                    <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped bg-success css" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="content mr-3">
                        <label htmlFor="JavaScript">JavaScript</label>
                    </div>
                    <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped bg-info js" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="content mr-3">
                        <label htmlFor="MySQL">MySQL</label>
                    </div>
                    <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped bg-warning mysql" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="content mr-3">
                        <label htmlFor="React">React</label>
                    </div>
                    <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped bg-danger react" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
     );
}
 
export default Skills;