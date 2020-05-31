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
            <span className="pr-2">
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

