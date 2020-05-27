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
      <ListGroup horizontal className="mb-2 shadow-sm">
        <ListGroupItem id={phase.name} className="w-25 text-center font-weight-bold" tag="button" action>{phase.start}</ListGroupItem>
        <ListGroupItem id={phase.name} className="flex-fill font-weight-bold text-center" tag="button" action>
          {phase.name}
          { phase.active
            ? <span className="text-danger font-weight-light"> <Badge color="warning"> In Progress</Badge></span>
            : <div></div>
          } 
        </ListGroupItem>
        <ListGroupItem id={phase.name} className="w-25 font-weight-bold" tag="button" action>{phase.end}</ListGroupItem>
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
    console.log('PROPS');
    console.log(props); 
    const proj_phases = props.project.phases.map((phase)=> {
      return(
        <RenderPhase phase={phase}/>
      ); 
    });

    return(
      <div>
        <Card className="my-3 card-border">
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
              <Button size="sm" className="align-end" outline color="dark" onClick={()=>{props.handleCloseDetails();}}>Close Details</Button>
              </h4>
            </CardTitle>
            <CardSubtitle className="pl-2 normal-text">
              <h5>
                {props.project.description}
              </h5>
              <p className="font-weight-bold normal-text">
                Project description goes here. Project was last updated on {props.project.lastupdated}. 
              </p>
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
