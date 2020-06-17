import React from 'react';
import moment from 'moment'; 
import {  
  Col, 
  Badge, 
  Card,
  CardBody, 
  CardSubtitle, 
  CardTitle, 
  CardText, 
  Row
 } from 'reactstrap';
import { Loading } from './LoadingComponent'; 

function renderPhases(active_phases) {
  const active_phases_lst = active_phases.map((phase) => {
    const phase_end = moment(phase.end); 
    return(
      <span className="px-1">
        <Badge color="dark">
          {phase.name} {phase_end.fromNow()}
        </Badge>
      </span>
    ); 
  }); 
  return(
    <span>{active_phases_lst}</span>
  ); 
}

function renderProj(projects, phases, handleClicked) {
  if (projects) {
    const projects_rend = projects.map((project) => {
      const on_schedule = project.status;
      // filtering for phases related to this project
      const proj_phases = phases.filter((phase) => project.id === phase.projectId); 
      const active_phases = proj_phases.filter((phase) => phase.active);
      const phases_rend = renderPhases(active_phases); 
      return(
        <span>
          <p style={{fontweight: 'superbold'}}>
            <span className="pr-2">
                <svg class="bi bi-box-seam" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                </svg>
                &nbsp; 
                <span className="project-link" onClick={() => {handleClicked(project.id);}}>
                  {project.name}
                </span>
              &nbsp; 

            </span>
            <p className="ml-4">
              { on_schedule
                ? <span>
                    <Badge color="success">On Track</Badge>
                  </span>
                : <span>
                    <Badge className="off-badge">Off Track</Badge>
                  </span>
              } | 
              {phases_rend}
            </p>
            <p className="ml-4">
            </p>
          </p>  
        </span>  
      ); 
    }); 
    return (
      <span>
        {projects_rend}
      </span>
    ); 
  } else {
    return(
    <div>wtf</div>); 
  }
}

function ProjectWorkInProgress(props) {
  if (props.projectsLoading) {
    return(
      <Row>
        <Col>
          <Card className="mt-2 text-center card-border">
            <CardBody className="text-left">
              <CardTitle className="pl-2">
                <h4 lead>
                  Work In Progress (Deadlines)
                </h4>
              </CardTitle>
              <CardSubtitle className="pl-2">
                <hr></hr>
              </CardSubtitle>
              <CardText className="font-weight-bold"><Loading /></CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  } else {
    return(
      <Row>
        <Col>
          <Card className="mt-2 text-center card-border">
            <CardBody className="text-left">
              <CardTitle>
                <h4 lead>
                  Work In Progress (Deadlines)
                </h4>
              </CardTitle>
              <CardSubtitle>
                <hr></hr>
              </CardSubtitle>
              <CardText className="pt-1 pl-1 font-weight-bold">{renderProj(props.projects, props.phases, props.handleProjectClicked)}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}


export default ProjectWorkInProgress; 

