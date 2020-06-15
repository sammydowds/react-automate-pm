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
  Row, 
  UncontrolledTooltip
 } from 'reactstrap';
import { Loading } from './LoadingComponent'; 


function renderProj(phases, handleClicked, projects) {
  if (phases != null){
    const phases_rend = phases.map((phase) => {
      const associate_project = projects[phase.projectId]; 
      return(
        <span>
          <p style={{fontweight: 'superbold', fontSize: "12px"}} id={'tooltip-'+ phase.id}>
            <span>
              <svg class="bi bi-exclamation-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="#ffa41b" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
              </svg>
              &nbsp; 
              &nbsp; 
              <span className="project-link" onClick={() => {handleClicked(phase.projectId);}}>
              {associate_project.name}: {phase.name} 
              </span>
              <UncontrolledTooltip placement="auto" target={'tooltip-'+ phase.id}>
                  Changes made {moment(phase.lastupdated).fromNow()}
              </UncontrolledTooltip>
            </span>
          </p>  
        </span>  
      ); 
    }); 
    return (
      <span>
        {phases_rend}
      </span>
    ); 
  } else {
    return(<div></div>); 
  }
}

function ProjectRecent (props) {
  if (props.projectsLoading) {
    return(
      <Row>
        <Col>
          <Card className="mt-2 card-border">
            <CardBody>
              <CardTitle className="pl-2 normal-text text-center">
                <h6 lead>
                  Recent Changes
                </h6>
              </CardTitle>
              <CardSubtitle>
                <hr></hr>
              </CardSubtitle>
              <CardText className="font-weight-bold text-left pl-2"><Loading /></CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  } else {
    const recent_phases = props.phases.filter((phases) => moment(phases.lastupdated, "YYYY-MM-DD") > moment().subtract(5, "days")); 
    return(
      <Row>
        <Col>
          <Card className="mt-2 card-border">
            <CardBody>
              <CardTitle className="pl-2 normal-text text-center">
                <h6 lead>
                  Recent Changes <Badge className="off-badge">{recent_phases.length}</Badge>
                </h6>
              </CardTitle>
              <CardSubtitle>
                <hr></hr>
              </CardSubtitle>
              <CardText className="font-weight-bold text-center">{renderProj(recent_phases, props.handleProjectClicked, props.projects)}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}


export default ProjectRecent; 

