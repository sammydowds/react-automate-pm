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
  ModalBody, 
  UncontrolledTooltip
 } from 'reactstrap';
import { Loading } from './LoadingComponent';
import UpdateProjectForm from '../forms/UpdateProjectFormComponent'; 
import UpdatePhaseForm from '../forms/UpdatePhaseFormComponent';
import CreatePhaseForm from '../forms/CreatePhaseModalComponent';  


class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copiedSuccess: false, 
      phaseCopied: null
    }
  }

  componentDidMount() {
    if (document.getElementById('projDetails')) {
      const element = document.getElementById('projDetails'); 
      element.scrollIntoView({behavior: "smooth"}); 
    }
  }

  copyToClipboard = (phaseToCopy, projectToCopy) => {
    const phase_strt = moment(phaseToCopy.start); 
    const phase_ending = moment(phaseToCopy.end);
    let start_date = (phase_strt.format("M") + '/' + phase_strt.date() + ' (' + phase_strt.format("ddd") + ') - ' + phase_strt.fromNow()); 
    let end_date = (phase_ending.format("M") + '/' + phase_ending.date() + ' (' + phase_ending.format("ddd") + ') - ' + phase_ending.fromNow()); 
    var body_text = (
    ' Project: ' + projectToCopy.name + '\n' +
    ' Phase Name: ' + phaseToCopy.name + '\n' +
    ' Starts: ' + start_date + '\n' +
    ' Ends: ' + end_date + '\n' 
      ); 
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = body_text;
    dummy.select();
    document.execCommand("copy");
    this.setState({copiedSuccess: true, phaseCopied: phaseToCopy.id}); 
    document.body.removeChild(dummy);
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
          <td>
            {phase.name}
            &nbsp; 
            {moment(phase.lastupdated, "YYYY-MM-DD") > moment().subtract(5, "days")
              ?  <span>
                    <svg id={'tooltip-details-'+ phase.id} class="bi bi-exclamation-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="#ffa41b" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                    </svg>
                    <UncontrolledTooltip placement="right" target={'tooltip-details-'+ phase.id}>
                        Changes made {moment(phase.lastupdated).fromNow()}
                    </UncontrolledTooltip>
                  </span>
              : <span></span>
            }
          </td>
          <td>{phase_start.format("M")}/{phase_start.date()} ({phase_start.format("ddd")})</td>
          <td>{phase_end.format("M")}/{phase_end.date()} ({phase_end.format("ddd")})</td>
          <td>{phase_end.fromNow()}</td>
          <td>{phase_end.diff(phase_start, "days")}</td>
          <td>
              {this.state.copiedSuccess && this.state.phaseCopied === phase.id
                ? <span><Badge color="danger">Copied!</Badge></span>
                : <span><Badge color="danger" className="invisible">Copied!</Badge></span>
              }
          </td>
          <td>
            <span onClick={() => {this.props.openPhaseUpdateModal(phase.id)}}>
              <svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
                <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
              </svg>
            </span>
            &nbsp;
            <span onClick={() => {this.copyToClipboard(phase, this.props.project)}}>
              <svg class="bi bi-clipboard" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
              </svg>
            </span> 
          </td>
        </React.Fragment>
    ); 
  }

  renderPhaseForm() { 
    if (this.props.phaseUpdateModal.open) {
      const phase_selected = this.props.phases.filter(obj => {return obj.id === this.props.phaseUpdateModal.phaseId})[0]; 
      return(
        <Modal isOpen={this.props.phaseUpdateModal.open} className="text-center">
          <ModalHeader toggle={this.props.closePhaseUpdateModal} className="off-badge">Update Phase: {phase_selected.name}</ModalHeader>
          <ModalBody>
            <UpdatePhaseForm 
              phase={phase_selected} 
              updatePhase={this.props.updatePhase} 
              closePhaseUpdateModal={this.props.closePhaseUpdateModal}
            />
          </ModalBody>
        </Modal>
      ); 
    }
  }

  renderProjectForm() {
    return(
      <Modal isOpen={this.props.projectUpdateModal.open}>
        <ModalHeader toggle={this.props.closeProjectUpdateModal} className="off-badge">Update {this.props.project.name}</ModalHeader>
        <ModalBody>
          <UpdateProjectForm 
            project={this.props.project} 
            updateProject={this.props.updateProject}
            closeProjectUpdateModal={this.props.closeProjectUpdateModal}
          />
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
        <div id='projDetails'>
          <Card className="my-2 card-border">
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
                <span onClick={() => {this.props.openProjectUpdateModal(this.props.project.id)}}>
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
              <CardText className="pl-3 pb-3 text-center">
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
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {proj_phases}
                    </tbody>
                  </Table>
              </CardText>
              <div className="text-right">
                <Button size="sm" className="align-end" outline color="success" onClick={this.props.openPhaseCreateModal}>Add Phase</Button>
                &nbsp; 
                <Button size="sm" className="align-end" outline color="dark" onClick={this.props.handleCloseDetails}>Close Details</Button>
                {this.renderPhaseForm()}
                {this.renderProjectForm()}
                <CreatePhaseForm 
                  phaseCreateModal={this.props.phaseCreateModal} 
                  closePhaseCreateModal={this.props.closePhaseCreateModal} 
                  createPhase={this.props.createPhase}
                  projectId={this.props.project.id}
                  >
                </CreatePhaseForm>
              </div>
            </CardBody>
          </Card>
        </div>
      );
    }
  }
}; 


export default ProjectDetails; 
