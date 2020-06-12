import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProjects, fetchPhases, updateProject, updatePhase, initializeUserInterface, closeDetails, openDetails } from '../redux/ActionCreators';

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
  initializeUserInterface: () => {dispatch(initializeUserInterface())},
  closeDetails: () => {dispatch(closeDetails())}, 
  openDetails: (projectId) => {dispatch(openDetails(projectId))}

});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Main component mounted'); 
    this.props.fetchProjects();
    this.props.fetchPhases();
    this.props.initializeUserInterface(); 
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
            projectDetails={this.props.userinterface.userinterface}
            openDetails={this.props.openDetails}
            closeDetails={this.props.closeDetails}
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
