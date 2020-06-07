import React, { useState } from 'react';
import moment from 'moment'; 
import {  
  Badge, 
  Card,
  CardBody, 
  CardSubtitle, 
  CardTitle, 
  CardText, 
  Button,
  Table, 
 } from 'reactstrap';
import { Loading } from './LoadingComponent';
import UpdateProjectForm from './UpdateProjectFormComponent'; 

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
        <td>{phase_end.fromNow()}</td>
        <td>{phase_end.diff(phase_start, "days")}</td>
        <td>
          <div onClick={this.toggleModal}>
            <svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
              <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
            </svg>
          </div>
        </td>
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
             </h3>
              <hr></hr>
            </CardTitle>
            <CardSubtitle className="mb-2 lead text-center">
              Project Phases
            </CardSubtitle>
            <CardText className="pl-3 pb-3">
              <Table size="sm" className="text-center overflow-auto" hover responsive>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Phase</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Relative End</th>
                    <th>Duration (Days)</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {proj_phases}
                </tbody>
              </Table>
            </CardText>
            <div className="text-right">
            &nbsp; 
            <Button size="sm" className="align-end" outline color="dark" onClick={()=>{props.handleCloseDetails();}}>Close Details</Button>
              <UpdateProjectForm project={props.project} updateProject={props.updateProject} />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }

}


export default ProjectDetails; 
