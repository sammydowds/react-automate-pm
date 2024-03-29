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
  deleteSinglePhase, 
  checkCredentials, 
  signupUser, 
  logOut
} from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    projects: state.projects, 
    phases: state.phases, 
    userinterface: state.userinterface, 
    log: state.log, 
    user: state.user
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
  deleteSinglePhase: (phase_id) => {dispatch(deleteSinglePhase(phase_id))}, 
  checkCredentials: (user_info) => {dispatch(checkCredentials(user_info))}, 
  signupUser: (new_user) => {dispatch(signupUser(new_user))}, 
  logOut: () => {dispatch(logOut())}
});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchPhases(); 
    this.props.fetchLog();  
  }

  render () {
    const HomePage = () => {

      return(
        <Home 
          projects={this.props.projects.projects} 
          projectsLoading={this.props.projects.isLoading}
          phasesLoading={this.props.phases.isLoading} 
          updateProject={this.props.updateProject}
          projectsError={this.props.projects.errMess}
          phases={this.props.phases.phases}
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
          log={this.props.log.log}
          deleteProject = {this.props.deleteProject}
          deleteSinglePhase = {this.props.deleteSinglePhase}
          user={this.props.user.user}
          fetchProjects={this.props.fetchProjects}
          fetchPhases={this.props.fetchPhases}
          fetchLog={this.props.fetchLog}
          logOut={this.props.logOut}
          user={this.props.user}
          />
      ); 
    }

    return(
      <div>
        <Header/>
        <Switch>
            <Route exact path="/"> <Landing /> </Route>
            <Route path="/home" component={HomePage} />
            <Route path="/login" ><Login user={this.props.user} error={this.props.user.errMess} checkCredentials={this.props.checkCredentials}/></Route>
            <Route path="/signup" ><Signup signupUser={this.props.signupUser} error={this.props.user.errMess} user={this.props.user} /></Route>
        </Switch>
      </div>
    );
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); 
