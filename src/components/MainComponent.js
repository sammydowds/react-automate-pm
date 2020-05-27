import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent'; 
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProjects } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => {dispatch(fetchProjects())}
});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Main component mounted'); 
    this.props.fetchProjects();
  }

  render () {

      const HomePage = () => {
        return(
          <Home projects={this.props.projects} projectsLoading={this.props.projects.isLoading}/>
        ); 
      }

      return(
        <div className="main-container">
          <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
          </Switch>
        </div>
      );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); 
