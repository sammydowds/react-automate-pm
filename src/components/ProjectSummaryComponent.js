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
          <p style={{fontweight: 'superbold', fontSize: "12px"}} className="py-0.5">
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
              { on_schedule
                ? <svg class="bi bi-check" width="2em" height="2em" viewBox="0 0 16 16" fill="#33ff00" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                  </svg>
                : <svg class="bi bi-x" width="2em" height="2em" viewBox="0 0 16 16" fill="#ff0033" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/>
                  </svg>
              } 
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
                    Off Track Projects <Badge color="danger">{offtrack_projects.length}</Badge>
                  </h6>
                </CardTitle>
                <CardSubtitle className="pl-2">
                </CardSubtitle>
                <CardText className="py-3 font-weight-bold text-left">{this.renderProj(offtrack_projects)}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      );
    }
  }
}

export default ProjectSummary; 

