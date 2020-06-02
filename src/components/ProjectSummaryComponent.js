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

class ProjectSummary extends Component {
  constructor(props) {
    super(props); 
  }

  renderProj(projects) {
    const projects_rend = projects.map((project) => {
      const on_schedule = project.status; 
      return(
        <span>
          <p style={{fontweight: 'superbold', fontSize: "12px"}}>
            <span>
              <svg class="bi bi-flag-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#ffa41b" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 0 0 .593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 0 1 3.5 9V3a.5.5 0 0 1 .223-.416l.04-.026z"/>
              </svg> 
              &nbsp; 
              <a className="project-link" onClick={() => {this.props.handleProjectClicked(project);}}>
                {project.name}
              </a>
            </span>
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
      const offtrack_projects = this.props.projects.filter((project) => project.status == false); 
      return(
        <Row>
          <Col>
            <Card className="mt-3 card-border">
              <CardBody>
                <CardTitle className="pl-2 normal-text">
                  <h6 lead>
                    Off Track Projects <Badge className="off-badge">{offtrack_projects.length}</Badge>
                  </h6>
                </CardTitle>
                <CardSubtitle className="pl-2">
                  <hr></hr>
                </CardSubtitle>
                <CardText className="font-weight-bold text-left">{this.renderProj(offtrack_projects)}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      );
    }
  }
}

export default ProjectSummary; 

