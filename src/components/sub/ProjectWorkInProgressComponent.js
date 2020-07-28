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
import HeatMap from './HeatMapComponent'; 

function heatmapProccessing(projects, phases) {
  let index = []; 
  // finding furthest date away from today, setting to 1 initially to prevent 0 from filling in 
  let furthest = 1; 
  for (let phase of phases) {
    let end_day = moment(phase.end); 
    let proj_name = (projects.filter((proj) => phase.projectId === proj.id)[0]).name; 
    let days_away = end_day.diff(moment(), 'days');
    if (furthest < days_away)  {
      furthest = days_away; 
    }
    index.push({'id': phase.id, 'top': phase.name, 'display': days_away, 'right': 'days', 'left': 'due', 'bottom': proj_name}); 
  }
  // normalizing data from longest duration to 10 
  for (let index_phase of index) {
    let diff_largest = furthest-index_phase.display; 
    if (diff_largest > furthest) {
      diff_largest = furthest; 
    }
    let heat = ((diff_largest)/furthest) * 8; 
    index_phase['index'] = heat; 
  }
  return index; 
}

function renderHeatMap(projects, phases) {
  if (phases) {
    let active_phases = phases.filter((phase) => phase.active); 
    if (active_phases.length > 0) {
      // preprocessing data to get index values for heatmap component (normalizing)
      let index = heatmapProccessing(projects, active_phases);
      let color = [255, 165, 0]; 
      return(
        <HeatMap index={index} color={color} />
      )
    } else {
      return(
        <div>No Active Phases</div>
      )
    }
  } else {
    return(
      <div>No Phases to Show</div>
    ); 
  }
}

function renderPhases(active_phases) {
  if (active_phases.length !== 0) {
    const active_phases_lst = active_phases.map((phase) => {
      const phase_end = moment(phase.end).fromNow(); 
      return(
        <span className="mx-1">
          <Badge color="dark">
            {phase.name} {phase_end}
          </Badge>
        </span>
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

function renderProj(projects, phases, handleClicked) {
  if (projects) {
    const projects_rend = projects.map((project) => {
      // filtering for phases related to this project
      // Might create a separate function to filter these (could help with debugging, and might be able to use with pre-processing)
      const proj_phases = phases.filter((phase) => project.id === phase.projectId); 
      const active_phases = proj_phases.filter((phase) => phase.active);
      // past due projects are in the past and marked as not complete
      // binary to notify if there are past projects or not  
      const past_due_phases = proj_phases.filter((pphase) => moment(pphase.end).isBefore(moment()) && pphase.complete === false).length; 
      const phases_rend = renderPhases(active_phases); 
      return(
        <span>
          <p style={{fontSize: '18px', fontweight: 'superbold'}}>
            <span>
                <svg class="bi bi-box-seam" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                </svg>
                &nbsp; 
                <span className="project-link" onClick={() => {handleClicked(project.id);}}>
                  {project.name}
                </span>

            </span>
              { past_due_phases === 0
                ? <span className="mx-1">
                  </span>
                : <span className="mx-1">
                    <Badge className="off-badge">Past Due</Badge>
                  </span>
              } 
              {phases_rend}
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
    <div>No Projects</div>); 
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
      <Row>
        <Col>
          <Card className="my-2 text-center card-border">
            <CardBody>
              <CardTitle className="text-center">
                <h3 lead>
                  Work in Progress
                </h3>
              </CardTitle>
              <CardSubtitle>
                <hr></hr>
              </CardSubtitle>
              <CardText className="pt-1 font-weight-bold">
                <p className='text-left'>
                  {renderProj(props.projects.filter((project) => project.complete === false), props.phases, props.handleProjectClicked)}
                </p>

                <p className='text-center'>
                  <h4>Heat Shield</h4>
                  <hr></hr>
                </p>
                <p className='d-inline-block'>
                  {renderHeatMap(props.projects, props.phases)}
                </p>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}


export default ProjectWorkInProgress; 

