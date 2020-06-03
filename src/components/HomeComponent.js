import React, { Component } from 'react';
import { 
  Container, 
  Row, 
  Col
 } from 'reactstrap';
import ProjectSearch from './ProjectSearchComponent'; 
import ProjectOff from './ProjectOffTrackComponent'; 
import ProjectRecent from './ProjectRecentUpdateComponent'; 
import ProjectDetails from './ProjectDetailsComponent'; 
import LeftMenu from './LeftMenuComponent'; 


class HomeComponent extends Component {

constructor(props) {
  super(props);
  this.state = {
    projectClicked: false,
    projectSelected: null,
    }
  }

  handleProjectClicked = projectFromDashboard => {
    this.setState({projectClicked: true, projectSelected: projectFromDashboard}); 
  }

  handleCloseDetails = () => {
    this.setState({projectClicked: false, projectSelected: null}); 
  }


render () {

    return(
      <Container className="container-spacing" fluid={true}>
        <Row className="h-100 justify-content-center">

          <Col lg="2">
            <LeftMenu numProjects={this.props.projects.projects.length} />
            <ProjectOff projects={this.props.projects.projects} projectsLoading={this.props.projects.isLoading} handleProjectClicked={this.handleProjectClicked} />
            <ProjectRecent projects={this.props.projects.projects} projectsLoading={this.props.projects.isLoading} handleProjectClicked={this.handleProjectClicked} />
          </Col>

          <Col lg="4">
            <ProjectSearch projects={this.props.projects.projects} projectsLoading={this.props.projects.isLoading} handleProjectClicked={this.handleProjectClicked} />
          </Col>

          <Col lg="6">
            {this.state.projectClicked
              ? <ProjectDetails project={this.state.projectSelected} handleCloseDetails={this.handleCloseDetails}></ProjectDetails>
              : <div></div>
            }
          </Col>

        </Row>
      </Container>
      
    );
  }

}

export default HomeComponent; 
