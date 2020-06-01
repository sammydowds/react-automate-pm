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
  ListGroupItem,
  ListGroup,
 } from 'reactstrap';
import { Loading } from './LoadingComponent'; 

function RenderPhase({phase}) {
  const phase_end = moment(phase.end, "YYYY-MM-DD");
  const phase_start = moment(phase.start, "YYYY-MM-DD")
  return(
    <React.Fragment>
      <ListGroup horizontal className="mb-2 shadow-sm">
        <ListGroupItem id={phase.name} className="flex-fill font-weight-bold text-left">
          <h4>
            {phase.name}
            { phase.active
            ? <span className="text-danger font-weight-light"> <Badge color="warning"> WIP </Badge></span>
            : <div></div>
          } 
          </h4>
          <p className="blockquote-footer">{phase.description}</p>
        </ListGroupItem>
        <ListGroupItem id={phase.name} className="w-25 date-details text-center font-weight-bold">
          <p>
            <h6>Start</h6>
            <hr></hr>
            {phase_start.format("dddd")}
            ,&nbsp; 
            {phase_start.month()}/{phase_start.date()}
            <br></br>
            <span className="font-small">({phase_start.fromNow()})</span>
          </p>
        </ListGroupItem>
        <ListGroupItem id={phase.name} className="w-25 date-details text-center font-weight-bold">
          <p>
              <h6>Completion</h6>
              <hr></hr>
              {phase_end.format("dddd")}
              ,&nbsp; 
              {phase_end.month()}/{phase_end.date()}
              <br></br>
              ({phase_end.fromNow()})
            </p>
        </ListGroupItem>
        <ListGroupItem id={phase.name} className="w-15 date-details text-center font-weight-bold">
          <p>
            <h6>Duration</h6>
            <hr></hr>
            {phase_end.diff(phase_start, "days")} days
          </p>
        </ListGroupItem>
    </ListGroup>
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
              <h3 lead>
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
              </h3>
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
