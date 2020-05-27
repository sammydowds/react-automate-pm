import React from 'react';
import { Link } from 'react-router-dom';
import {  
  Badge, 
  Card,
  CardBody, 
  CardSubtitle, 
  CardTitle, 
  CardText, 
  Button,
  Breadcrumb, 
  BreadcrumbItem, 
  ListGroupItem,
  ListGroup,
  CustomInput, 
  UncontrolledCollapse
 } from 'reactstrap';
import { Loading } from './LoadingComponent'; 

function RenderPhase({phase}) {
  return(
    <React.Fragment>
      <ListGroup horizontal className="mb-2 shadow-sm bg-dark">
        <ListGroupItem id={phase.name} className="w-25 bg-dark text-white text-center font-weight-bold" tag="button" action>{phase.start}</ListGroupItem>
        <ListGroupItem id={phase.name} className="flex-fill lead bg-dark text-white font-weight-bold" tag="button" action>
          {phase.name}
          { phase.active
            ? <span className="text-danger font-weight-light"> <Badge color="warning"> In Progress</Badge></span>
            : <div></div>
          } 
        </ListGroupItem>
        <ListGroupItem id={phase.name} className="w-25 bg-dark text-white font-weight-bold" tag="button" action>{phase.end}</ListGroupItem>
    </ListGroup>
    <UncontrolledCollapse className="mb-2" toggler={"#" + phase.name}>
      <Card>
        <CardBody>
          {phase.description}
        </CardBody>
      </Card>
    </UncontrolledCollapse>
    </React.Fragment>
    
  ); 
}

const ProjectDetails = (props) => {
  console.log("PROPS HERE");
  console.log(props); 
  if (props.projectsLoading) {
    return(
      <Loading />
    );
  } else {

    const proj_phases = props.project.phases.map((phase)=> {
      return(
        <RenderPhase phase={phase}/>
      ); 
    });

    return(
      <div>
        <Card className="mt-3 shadow bg-dark text-white card-radius">
          <CardBody className="text-left">
            <CardTitle className="pl-2">
              <h4 lead>
              { props.project.status
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
                {props.project.name}
                &nbsp; 
                { props.project.status
                  ? <svg class="bi bi-check" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="#33ff00" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                    </svg>
                  : <svg class="bi bi-x" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="#ff0033" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                      <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/>
                    </svg>
                } 
              </h4>
            </CardTitle>
            <CardSubtitle className="pl-2">
              <h5 className="text-white">
                {props.project.description}
              </h5>
              <p class="text-danger font-weight-light"><small>Last Updated: {props.project.lastupdated}</small></p>
            </CardSubtitle>
            <CardText className="pl-3 pb-3">
              {proj_phases}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

}


export default ProjectDetails; 
