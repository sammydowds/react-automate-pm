import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  fetchProjects, 
  fetchPhases, 
  updateProject, 
  updatePhase, 
  closeDetails, 
  openDetails, 
  closePhaseUpdateModal, 
  openPhaseUpdateModal, 
  closeProjectUpdateModal,
  openProjectUpdateModal, 
  openProjectCreateModal, 
  closeProjectCreateModal,
  openPhaseCreateModal,
  closePhaseCreateModal
} from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    projects: state.projects, 
    phases: state.phases, 
    userinterface: state.userinterface 
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => {dispatch(fetchProjects())}, 
  fetchPhases: () => {dispatch(fetchPhases())}, 
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
  closePhaseCreateModal: () => {dispatch(closePhaseCreateModal())}
});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Main component mounted'); 
    this.props.fetchProjects();
    this.props.fetchPhases();
  }

  render () {
      const HomePage = () => {
        return(
          <Home 
            projects={Object.values(this.props.projects.projects)} 
            projectsLoading={this.props.projects.isLoading} 
            updateProject={this.props.updateProject}
            phases={Object.values(this.props.phases.phases)}
            phasesLoading={this.props.phases.isLoading}
            updatePhase={this.props.updatePhase}
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
            />
        ); 
      }

      return(
        <div className="main-container">
          <Header />
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); 
