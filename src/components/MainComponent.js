import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProjects, fetchPhases } from '../redux/ActionCreators';
import { updateProject } from '../redux/ActionCreators'; 

const mapStateToProps = state => {
  return {
    projects: state.projects, 
    phases: state.phases 
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => {dispatch(fetchProjects())}, 
  fetchPhases: () => {dispatch(fetchPhases())}, 
  updateProject: (id, name, description, phases, company, complete, status) => {dispatch(updateProject(id, name, description, phases, company, complete, status))}
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
            projects={this.props.projects} 
            projectsLoading={this.props.projects.isLoading} 
            updateProject={this.props.updateProject}
            phases={this.props.phases}
            phasesLoading={this.props.phases.isLoading}
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
