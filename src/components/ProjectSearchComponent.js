import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'; 
import {  
  Col, 
  Badge, 
  Card,
  CardBody, 
  CardSubtitle, 
  CardTitle, 
  CardText, 
  Button,
  Breadcrumb, 
  BreadcrumbItem, 
  Row
 } from 'reactstrap';
import { Loading } from './LoadingComponent'; 

class ProjectSearch extends Component {
  constructor(props) {
    super(props); 
  }

  renderPhases(active_phases) {
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

  renderProj(projects) {
    const projects_rend = projects.map((project) => {
      const on_schedule = project.status; 
      const active_phases = project.phases.filter((phase) => phase.active);
      const phases_rend = this.renderPhases(active_phases); 
      return(
        <span>
          <p style={{fontweight: 'superbold'}}>
            <span className="pr-2">
                
                <a className="project-link" onClick={() => {this.props.handleProjectClicked(project);}}>
                  {project.name}
                </a>
              &nbsp; 
              <a href='#' className="project-link text-right">
                <svg class="bi bi-clipboard" width="1em" height="1em" viewBox="0 0 16 16" fill="grey" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" clip-rule="evenodd"/>
                </svg>
              </a>
              { on_schedule
                ? <span className="align-middle">
                  </span>
                : <span>
                    <Badge className="off-badge ml-1">Off Track</Badge>
                  </span>
              }
            </span>
            <p className="badge-subtext">
              WIP: 
              {phases_rend} 
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
  }

  render () {
    if (this.props.projectsLoading) {
      return(
        <Loading />
      );
    } else {
      return(
        <Row>
          <Col>
            <Card className="mt-3 text-center card-border">
              <CardBody className="text-left">
                <CardTitle className="pl-2">
                  <h4 lead>
                    Open Projects
                  </h4>
                </CardTitle>
                <CardSubtitle className="pl-2">
                  <hr></hr>
                </CardSubtitle>
                <CardText className="pt-2 pl-4 font-weight-bold">{this.renderProj(this.props.projects)}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      );
    }
  }
}

export default ProjectSearch; 

