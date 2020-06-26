import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Login from './LoginComponent'; 
import Landing from './LandingComponent'; 
import Signup from './SignupComponent';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  fetchProjects, 
  fetchPhases, 
  fetchLog,
  updateProject, 
  updatePhase, 
  createProject, 
  createPhase,
  closeDetails, 
  openDetails, 
  closePhaseUpdateModal, 
  openPhaseUpdateModal, 
  closeProjectUpdateModal,
  openProjectUpdateModal, 
  openProjectCreateModal, 
  closeProjectCreateModal,
  openPhaseCreateModal,
  closePhaseCreateModal, 
  createLogEntry, 
  deleteProject, 
  deleteSinglePhase
} from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    projects: state.projects, 
    phases: state.phases, 
    userinterface: state.userinterface, 
    log: state.log
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => {dispatch(fetchProjects())}, 
  fetchPhases: () => {dispatch(fetchPhases())},
  fetchLog: () => {dispatch(fetchLog())},  
  updateProject: (proj_id, values) => {dispatch(updateProject(proj_id, values))}, 
  updatePhase: (phase_id, values) => {dispatch(updatePhase(phase_id, values))}, 
  closeDetails: () => {dispatch(closeDetails())}, 
  openDetails: (projectId) => {dispatch(openDetails(projectId))},
  openPhaseUpdateModal: (phaseId) => {dispatch(openPhaseUpdateModal(phaseId))}, 
  closePhaseUpdateModal: () => {dispatch(closePhaseUpdateModal())},
  openProjectUpdateModal: (projectId) => {dispatch(openProjectUpdateModal(projectId))}, 
  closeProjectUpdateModal: () => {dispatch(closeProjectUpdateModal())}, 
  openProjectCreateModal: () => {dispatch(openProjectCreateModal())}, 
  closeProjectCreateModal: () => {dispatch(closeProjectCreateModal())}, 
  openPhaseCreateModal: () => {dispatch(openPhaseCreateModal())}, 
  closePhaseCreateModal: () => {dispatch(closePhaseCreateModal())}, 
  createProject: (values) => {dispatch(createProject(values))}, 
  createPhase: (projectId, values) => {dispatch(createPhase(projectId, values))}, 
  createLogEntry: (entry) => {dispatch(createLogEntry(entry))}, 
  deleteProject: (project_id) => {dispatch(deleteProject(project_id))}, 
  deleteSinglePhase: (phase_id) => {dispatch(deleteSinglePhase(phase_id))}
});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Main component mounted'); 
    this.props.fetchProjects();
    this.props.fetchPhases();
    this.props.fetchLog(); 
  }

  render () {
    let projects_list = []; 
    let phases_list = []; 
    let log_list = []; 
    if (this.props.projects.projects.length !== 0) {
      projects_list = Object.values(this.props.projects.projects); 
    } 
    if (this.props.phases.phases.length !== 0) {
      phases_list = Object.values(this.props.phases.phases); 
    }
    if (this.props.log.log.length !== 0) {
      log_list = Object.values(this.props.log.log).reverse(); 
    }
    const HomePage = () => {
      return(
        <Home 
          projects={projects_list} 
          projectsLoading={this.props.projects.isLoading}
          phasesLoading={this.props.phases.isLoading} 
          updateProject={this.props.updateProject}
          phases={phases_list}
          updatePhase={this.props.updatePhase}
          createProject={this.props.createProject}
          createPhase={this.props.createPhase}
          projectDetails={this.props.userinterface.projectDetails}
          phaseUpdateModal={this.props.userinterface.phaseUpdateModal}
          projectUpdateModal={this.props.userinterface.projectUpdateModal}
          phaseCreateModal={this.props.userinterface.phaseCreateModal}
          projectCreateModal={this.props.userinterface.projectCreateModal}
          openDetails={this.props.openDetails}
          closeDetails={this.props.closeDetails}
          openPhaseUpdateModal={this.props.openPhaseUpdateModal}
          closePhaseUpdateModal={this.props.closePhaseUpdateModal}
          openProjectUpdateModal={this.props.openProjectUpdateModal}
          closeProjectUpdateModal={this.props.closeProjectUpdateModal}
          openProjectCreateModal={this.props.openProjectCreateModal}
          closeProjectCreateModal={this.props.closeProjectCreateModal}
          openPhaseCreateModal={this.props.openPhaseCreateModal}
          closePhaseCreateModal={this.props.closePhaseCreateModal}
          createLogEntry={this.props.createLogEntry}
          log={log_list}
          deleteProject = {this.props.deleteProject}
          deleteSinglePhase = {this.props.deleteSinglePhase}
          />
      ); 
    }

    return(
      <React.Fragment>
        <Header/>
        <Switch>
          <Route path="/learn" ><Landing /></Route>
          <Route path="/home" component={HomePage} />
          <Route path="/login" ><Login /></Route>
          <Route path="/signup" ><Signup /></Route>
        </Switch>
      </React.Fragment>
    );
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); 
