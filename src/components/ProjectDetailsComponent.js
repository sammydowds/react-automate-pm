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
  Table
 } from 'reactstrap';
import { Loading } from './LoadingComponent'; 

function RenderPhase({phase}) {
  const phase_end = moment(phase.end, "YYYY-MM-DD");
  const phase_start = moment(phase.start, "YYYY-MM-DD")
  return(
    <React.Fragment>
      <tr>
        <th scope="row">
          { phase.active
            ? <span className="text-danger font-weight-light"> <Badge color="warning"> WIP </Badge></span>
            : <div></div>
          } 
        </th>
        <td>{phase.name}</td>
        <td>{phase_start.month()}/{phase_start.day()} ({phase_start.format("ddd")})</td>
        <td>{phase_end.month()}/{phase_end.day()} ({phase_end.format("ddd")})</td>
        <td>{phase_end.diff(phase_start, "days")}</td>
        <td>{phase_end.fromNow()}</td>
      </tr>
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
              <Button size="sm" className="align-end" outline color="dark" onClick={()=>{props.handleCloseDetails();}}>Close Details</Button>
             </h3>
              <hr></hr>
            </CardTitle>
            <CardSubtitle className="mb-2 lead text-center">
              Project Phases
            </CardSubtitle>
            <CardText className="pl-3 pb-3">
              <Table className="text-center" hover>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Phase</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Duration (Days)</th>
                    <th>Relative End</th>
                  </tr>
                </thead>
                <tbody>
                  {proj_phases}
                </tbody>
              </Table>
            </CardText>
            <div className="text-right">
              <Button size="md" className="align-end" outline color="secondary"> Update </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }

}


export default ProjectDetails; 
