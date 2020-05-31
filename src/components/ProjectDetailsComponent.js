import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'; 
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
  const phase_end = moment(phase.end, "YYYY-MM-DD");
  const phase_start = moment(phase.start, "YYYY-MM-DD")
  return(
    <React.Fragment>
      <ListGroup horizontal className="mb-2 shadow-sm">
        <ListGroupItem id={phase.name} className="w-25 date-details text-center font-weight-bold " tag="button" action>
          <p>Start: {phase_start.fromNow()}</p>
        </ListGroupItem>
        <ListGroupItem id={phase.name} className="flex-fill font-weight-bold text-center" tag="button" action>
          {phase.name}
          { phase.active
            ? <span className="text-danger font-weight-light"> <Badge color="warning"> In Progress</Badge></span>
            : <div></div>
          } 
        </ListGroupItem>
        <ListGroupItem id={phase.name} className="w-25 date-details text-center font-weight-bold" tag="button" action>
          <p>Due: {phase_end.fromNow()}</p>
        </ListGroupItem>
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
              {props.project.name}
              &nbsp;
              { props.project.status
                ? <span className="align-middle">
                  </span>
                : <span>
                    <Badge className="off-badge ml-1">Off Track</Badge>
                  </span>
              }
              &nbsp;  
              <Button size="sm" className="align-end" outline color="dark"> Update </Button>
              &nbsp; 
              <Button size="sm" className="align-end" outline color="dark" onClick={()=>{props.handleCloseDetails();}}>Close Details</Button>
              </h4>
              <hr></hr>
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
