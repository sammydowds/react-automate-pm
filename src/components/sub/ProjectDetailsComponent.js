import React, { useState, Component } from 'react';
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
  ModalBody,
  ModalFooter
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
      phaseSelected: null,
      projectSelected: this.props.project 
    }
    this.openPhaseModal = this.openPhaseModal.bind(this);
    this.closePhaseModal = this.closePhaseModal.bind(this);
    this.openProjectModal = this.openProjectModal.bind(this);
    this.closeProjectModal = this.closeProjectModal.bind(this);    
  } 

  closePhaseModal() {
    this.setState({phaseModal: false, phaseSelected: null});
  }

  openPhaseModal(phase) {
    this.setState({phaseModal: true, phaseSelected: phase}); 
  }

  closeProjectModal() {
    this.setState({projectModal: false});
  }

  openProjectModal() {
    this.setState({projectModal: true}); 
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
          </th>
          <td className="text-left">{phase.name}</td>
          <td>{phase_start.month()}/{phase_start.day()} ({phase_start.format("ddd")})</td>
          <td>{phase_end.month()}/{phase_end.day()} ({phase_end.format("ddd")})</td>
          <td>{phase_end.fromNow()}</td>
          <td>{phase_end.diff(phase_start, "days")}</td>
          <td>
            <div onClick={() => {this.openPhaseModal(phase)}}>
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
    if (this.state.phaseModal) {
      const phase = this.state.phaseSelected; 
      return(
        <Modal isOpen={this.state.phaseModal} toggle={this.closePhaseModal}>
          <ModalHeader toggle={this.closePhaseModal} className="off-badge">Update Phase: {phase.name}</ModalHeader>
          <ModalBody>
            <UpdatePhaseForm phase={phase}/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.closePhaseModal}>Cancel</Button>
            <Button color="primary" onClick={this.closePhaseModal}>Submit Changes</Button>{' '}
          </ModalFooter>
        </Modal>
      ); 
    } else {
      return (
        <div></div>
      ); 
    }
  }; 

  renderProjectForm() {
    const project = this.state.projectSelected; 
    return(
      <Modal isOpen={this.state.projectModal} toggle={this.closeProjectModal}>
        <ModalHeader toggle={this.closeProjectModal} className="off-badge">Update {project.name}</ModalHeader>
        <ModalBody>
          <UpdateProjectForm project={project}/>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.closeProjectModal}>Cancel</Button>
          <Button color="primary" onClick={this.closeProjectModal}>Submit Changes</Button>{' '}
        </ModalFooter>
      </Modal>
    ); 
  }

  render() {
    if (this.props.projectsLoading) {
      return(
        <Loading />
      );
    } else {
      console.log('PROPS');
      console.log(this.props); 
      const proj_phases = this.props.project.phases.map((phase)=> {
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
                <a href='#' className="project-link text-right">
                  <svg class="bi bi-clipboard" width="1em" height="1em" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" clip-rule="evenodd"/>
                  </svg>
                </a>
                &nbsp;
                <span onClick={() => {this.openProjectModal()}}>
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