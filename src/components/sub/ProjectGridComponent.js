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
  if (active_phases.length !== 0) {
    const active_phases_lst = active_phases.map((phase) => {
      const phase_end = moment(phase.end).fromNow(); 
      return(
          <Badge className="mx-1" color="dark">{phase.name} {phase_end}</Badge>
      ); 
    }); 
    return(
      <span>{active_phases_lst}</span>
    ); 
  } else {
    return(
    <span className="mx-1">
      <Badge color="light">
        No Phases in Progress
      </Badge>
  </span>
    ); 
  }
}

function renderProj(projects, phases, log, handleClicked) {
  if (projects) {
    const projects_rend = projects.map((project) => {
      // filtering for phases related to this project
      const proj_phases = phases.filter((phase) => project.id === phase.projectId); 
      const proj_log_length = (log.filter((entry) => project.id === entry.projectId)).length; 
      const phases_this_week = (proj_phases.filter((phase) => moment(phase.end).week() === moment().week()).length); 
      const past_due_phases = proj_phases.filter((pphase) => moment(pphase.end).isBefore(moment())).length; 
      const active_phases = proj_phases.filter((phase) => phase.active);
      const phases_rend = renderPhases(active_phases); 
      return(
        <Col className="py-2">
          {past_due_phases === 0
            ? <Card className="project-card-on p-2">
              <CardTitle className="project-card-title text-nowrap">
                  <svg class="bi bi-box-seam" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                  </svg>
                  &nbsp; 
                  <span className="project-link" onClick={() => {handleClicked(project.id);}}>
                    {project.name}
                  </span>
                  &nbsp; 
                  <span>
                  &nbsp; 
                   <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar-event" fill="orange" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>
                      <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"/>
                      <rect width="2" height="2" x="11" y="6" rx=".5"/>
                    </svg>
                    &nbsp; 
                    {phases_this_week}
                    &nbsp; 
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-triangle" fill="orange" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                    </svg>
                    &nbsp; 
                    {proj_log_length}
                  </span>
                </CardTitle>
                <CardText className="project-card-body text-nowrap">
                  {phases_rend}
                </CardText>
              </Card>
            : <Card className="project-card-off p-2">
                <CardTitle className="project-card-title text-nowrap">
                    <svg class="bi bi-box-seam" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                    </svg>
                    &nbsp; 
                    <span className="project-link" onClick={() => {handleClicked(project.id);}}>
                      {project.name}
                    </span>
                    &nbsp; 
                    <span>
                      &nbsp; 
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-square" fill="orange" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                      </svg>
                      &nbsp; 
                      {past_due_phases}
                      &nbsp; 
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar-event" fill="navy" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>
                        <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"/>
                        <rect width="2" height="2" x="11" y="6" rx=".5"/>
                      </svg>
                      &nbsp; 
                      {phases_this_week}
                      &nbsp; 
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-triangle" fill="navy" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                      </svg>
                      &nbsp; 
                      {proj_log_length}
                    </span>
                  </CardTitle>
                  <CardText className="project-card-body text-nowrap">
                    {phases_rend}
                  </CardText>
                </Card>
          }
        </Col>
      ); 
    }); 
    return (
      <React.Fragment>
        {projects_rend}
      </React.Fragment>
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
          <Card className="my-2 text-center card-border">
            <CardBody className="text-left">
              <CardTitle className="text-center">
                <h3 lead>
                  Work in Progress
                </h3>
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
        <Row className="justify-content-left">
          {renderProj(props.projects.filter((project) => project.complete === false), props.phases, props.log, props.handleProjectClicked)}
        </Row>

    );
  }
}


export default ProjectWorkInProgress; 

