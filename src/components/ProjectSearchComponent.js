import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
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
      return(
        <span className="px-1">
          <Button className="my-1" size="sm" color="dark" outline>
            {phase.name} <Badge color="light">{phase.end}</Badge>
          </Button>
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
          <p style={{fontweight: 'superbold'}} className="py-0.5">
            <span className="pr-2">
              <a className="project-link" onClick={() => {this.props.handleProjectClicked(project);}}>
                { on_schedule
                  ? <span className="align-middle">
                      <svg class="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#33ff00" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4"/>
                    </svg>
                    </span>
                  : <span className="align-middle">
                      <svg class="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#ff0033" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4"/>
                      </svg>
                    </span>
                }
                {project.name}
              </a>
              &nbsp; 
              <a href='#' className="project-link text-right">
              <svg class="bi bi-clipboard" width="1em" height="1em" viewBox="0 0 16 16" fill="grey" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" clip-rule="evenodd"/>
              </svg>
              </a>
            </span>
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
                    Projects
                  </h4>
                </CardTitle>
                <CardSubtitle className="pl-2">
                  <p>
                    <small>
                    <svg class="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#33ff00" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4"/>
                    </svg>
                    = On Schedule, 
                    &nbsp; 
                    <svg class="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#ff0033" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4"/>
                    </svg>
                    = Off Schedule, 
                    &nbsp;
                    <Button className="mb-2 btn-sm" inverse size="sm" color="dark" outline>
                      Phase In Progress <Badge color="light">End Date</Badge>
                    </Button>
                    </small>
                  </p>
                  <input type="text" class="form-control mb-1" placeholder="Filter by Project..." aria-label="Project" aria-describedby="basic-addon1"></input>
                </CardSubtitle>
                <CardText className="pt-2 font-weight-bold">{this.renderProj(this.props.projects)}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      );
    }
  }
}

export default ProjectSearch; 

