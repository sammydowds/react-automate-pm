import React, { Component } from 'react';
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
import { Loading } from './LoadingComponent';
import UpdateProjectForm from '../forms/UpdateProjectFormComponent'; 
import UpdatePhaseForm from '../forms/UpdatePhaseFormComponent'; 

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectModal: false, 
      phaseModal: false, 
      phaseSelected: null
    }
    this.togglePhaseModal = this.togglePhaseModal.bind(this);
    this.toggleProjectModal = this.toggleProjectModal.bind(this);
    this.selectedPhase = this.selectedPhase.bind(this); 
  } 

  togglePhaseModal() {
    this.setState({phaseModal: !this.state.phaseModal})
  }

  toggleProjectModal() {
    this.setState({projectModal: !this.state.projectModal})
  }

  selectedPhase(phase) {
    this.setState({phaseSelected: phase}); 
    this.togglePhaseModal(); 
  }

  renderPhase(phase) {
    const phase_end = moment(phase.end, "YYYY-MM-DD");
    const phase_start = moment(phase.start, "YYYY-MM-DD")
    return(
        <React.Fragment>
          <th scope="row">
            { phase.active
              ? <span className="text-danger font-weight-light"> <Badge color="warning"> WIP </Badge></span>
              : <div></div>
            } 
            { phase.complete
              ? <span className="text-danger font-weight-light"> <Badge color="success"> Done </Badge></span>
              : <div></div>
            } 
          </th>
          <td className="text-left">{phase.name}</td>
          <td>{phase_start.format("M")}/{phase_start.date()} ({phase_start.format("ddd")})</td>
          <td>{phase_end.format("M")}/{phase_end.date()} ({phase_end.format("ddd")})</td>
          <td>{phase_end.fromNow()}</td>
          <td>{phase_end.diff(phase_start, "days")}</td>
          <td>
            <div onClick={() => {this.selectedPhase(phase)}}>
              <svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
                <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
              </svg>
            </div>
          </td>
        </React.Fragment>
    ); 
  }

  renderPhaseForm() {
    if (this.state.phaseSelected) {
      const phase = this.state.phaseSelected; 
      return(
        <Modal isOpen={this.state.phaseModal} toggle={this.togglePhaseModal} className="text-center">
          <ModalHeader toggle={this.closePhaseModal} className="off-badge">Update Phase: {phase.name}</ModalHeader>
          <ModalBody>
            <UpdatePhaseForm phase={phase} updatePhase={this.props.updatePhase}/>
          </ModalBody>
        </Modal>
      ); 
    } else {
      return(<div></div>); 
    }
  
  }; 

  renderProjectForm() {
    return(
      <Modal isOpen={this.state.projectModal} toggle={this.toggleProjectModal}>
        <ModalHeader toggle={this.closeProjectModal} className="off-badge">Update {this.props.project.name}</ModalHeader>
        <ModalBody>
          <UpdateProjectForm project={this.props.project} updateProject={this.props.updateProject}/>
        </ModalBody>
      </Modal>
    ); 
  }

  render() {
    if (this.props.projectsLoading) {
      return(
        <Loading />
      );
    } else {
      const proj_phases = this.props.phases.map((phase)=> {
        return(
          <tr>
            {this.renderPhase(phase)}
          </tr>
        ); 
      });
      return(
        <div>
          <Card className="my-3 card-border">
            <CardBody className="text-left">
              <CardTitle className="pl-2 text-center">
                <h3 lead>
                {this.props.project.name}
                &nbsp;
                { this.props.project.status
                  ? <span>
                      <Badge color="success" className="ml-1">On Track</Badge>
                    </span>
                  : <span>
                      <Badge className="off-badge ml-1">Off Track</Badge>
                    </span>
                }
                &nbsp;
                <span onClick={() => {this.toggleProjectModal()}}>
                  <svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
                    <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
                  </svg>
                </span>
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
                      <th>Rel. End</th>
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
              <Button size="sm" className="align-end" outline color="dark" onClick={()=>{this.props.handleCloseDetails();}}>Close Details</Button>
              {this.renderPhaseForm()}
              {this.renderProjectForm()}
              </div>
            </CardBody>
          </Card>
        </div>
      );
    }
  }
}; 


export default ProjectDetails; 
