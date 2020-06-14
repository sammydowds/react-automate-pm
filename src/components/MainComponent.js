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
  closePhaseModal, 
  openPhaseModal, 
  closeProjectModal,
  openProjectModal
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
  openPhaseModal: (phaseId) => {dispatch(openPhaseModal(phaseId))}, 
  closePhaseModal: () => {dispatch(closePhaseModal())},
  openProjectModal: (projectId) => {dispatch(openProjectModal(projectId))}, 
  closeProjectModal: () => {dispatch(closeProjectModal())} 
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
            phaseModal={this.props.userinterface.phaseModal}
            projectModal={this.props.userinterface.projectModal}
            openDetails={this.props.openDetails}
            closeDetails={this.props.closeDetails}
            openPhaseModal={this.props.openPhaseModal}
            closePhaseModal={this.props.closePhaseModal}
            openProjectModal={this.props.openProjectModal}
            closeProjectModal={this.props.closeProjectModal}
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
