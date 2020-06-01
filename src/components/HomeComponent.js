import React, { Component } from 'react';
import { 
  Container, 
  Row, 
  Col
 } from 'reactstrap';
import ProjectSearch from './ProjectSearchComponent'; 
import ProjectSummary from './ProjectSummaryComponent'; 
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
            <ProjectSummary projects={this.props.projects.projects} projectsLoading={this.props.projects.isLoading} handleProjectClicked={this.handleProjectClicked} />
          </Col>

          <Col lg="3">
            <ProjectSearch projects={this.props.projects.projects} projectsLoading={this.props.projects.isLoading} handleProjectClicked={this.handleProjectClicked} />
          </Col>

          <Col lg="5">
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
