import React, { Component } from 'react';
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
  Table, 
  Modal, 
  ModalHeader, 
  ModalBody
 } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent'; 


class UpdateProjectForm extends Component {

  constructor(props) {
      super(props);
      this.state = {
          isModalOpen: false
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
      this.setState({
      isModalOpen: !this.state.isModalOpen
      });
  }

  handleSubmit(values) {
      this.toggleModal();
      this.props.updateProject(this.props.project.id, values.name, values.description, values.phases, values.company, values.complete, values.status);
  }

  render() {

      return (
      <React.Fragment>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Update {this.props.project.name}</ModalHeader>
          <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              </LocalForm>
          </ModalBody>
          </Modal>
          <Button outline className="secondary" onClick={this.toggleModal}>
            Update
          </Button>
      </React.Fragment>
      );
  }
}

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
              <Table size="sm" className="text-center" hover>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Phase</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Relative End</th>
                    <th>Duration (Days)</th>
                  </tr>
                </thead>
                <tbody>
                  {proj_phases}
                </tbody>
              </Table>
            </CardText>
            <div className="text-right">
              <UpdateProjectForm project={props.project} updateProject={props.updateProject} />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }

}


export default ProjectDetails; 
