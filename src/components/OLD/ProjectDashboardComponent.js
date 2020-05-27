import React, { useState } from 'react';
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
  BreadcrumbItem
 } from 'reactstrap';
import { Loading } from './LoadingComponent'; 

function RenderProj({project}, handleProjectClicked) {
  console.log('RENDER PROJECT FUNCTION');
  console.log(handleProjectClicked); 
  const on_schedule = project.status; 
  const active_phases = project.phases.filter((phase) => phase.active);
  const active_phases_lst = active_phases.map((phase) => {
    return(
      <span className="px-1">
        <Button className="mb-2" inverse size="sm" color="light" outline>
          {phase.name} <Badge color="light">{phase.end}</Badge>
        </Button>
      </span>
    ); 
  }); 

  return (
    <span>
      <p style={{fontweight: 'superbold'}} className="py-0.5">
        <span className="pr-2">
          <svg class="bi bi-circle-fill" width="0.5em" height="0.5em" viewBox="0 0 16 16" fill="grey" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4"/>
          </svg>
          &nbsp; 
          <Link className="project-link text-white" >{project.name}</Link>
          &nbsp; 
          { on_schedule
            ? <svg class="bi bi-check" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="green" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
              </svg>
            : <svg class="bi bi-x" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/>
              </svg>
          } 
          &nbsp; 
          <a href='#' className="project-link text-right">
            <svg class="bi bi-people-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="grey" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clip-rule="evenodd"/>
            </svg>
          </a>
          &nbsp; 
          <a href='#' className="project-link text-right">
          <svg class="bi bi-clipboard" width="1em" height="1em" viewBox="0 0 16 16" fill="grey" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" clip-rule="evenodd"/>
            <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" clip-rule="evenodd"/>
          </svg>
          </a>
        </span>
        {active_phases_lst} 
      </p>  
    </span>  
  ); 

}


const ProjectDashboard = (props) => {
  console.log('PROPS OF PROJECT DETAILS'); 
  console.log(props); 
  if (props.projectsLoading) {
    return(
      <Loading />
    );
  } else {
    const project = props.projects.map((project) =>{
      console.log(props.handleProjectClicked); 
      return(
        <RenderProj project={project} /> 
      ); 
    }); 

    return(
      <div>
        <Card className="mt-3 text-center bg-dark text-white card-radius">
          <CardBody className="text-left">
            <CardTitle className="pl-2">
              <h4 lead>
                Project Quick View 
              </h4>
            </CardTitle>
            <CardSubtitle className="pl-2">
              <p>
                <small>
                <svg class="bi bi-check" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="green" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                </svg>
                = On Schedule, 
                &nbsp; 
                <svg class="bi bi-x" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/>
                </svg>
                = Off Schedule, 
                &nbsp;
                <Button className="mb-2 btn-sm" inverse size="sm" color="light" outline>
                  Phase In Progress <Badge color="light">End Date</Badge>
                </Button>
                </small>
              </p>
              <input type="text" class="form-control mb-1" placeholder="Filter by Project..." aria-label="Project" aria-describedby="basic-addon1"></input>
            </CardSubtitle>
            <CardText className="pl-3 py-3">{project}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

}


export default ProjectDashboard; 
