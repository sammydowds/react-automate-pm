import React, { Component } from 'react';
import { 
  Container, 
  Row, 
  Col
 } from 'reactstrap';
import ProjectWorkInProgress from './sub/ProjectWorkInProgressComponent'; 
import ProjectOff from './sub/ProjectOffTrackComponent'; 
import ProjectRecent from './sub/ProjectRecentUpdateComponent'; 
import ProjectDetails from './sub/ProjectDetailsComponent'; 
import LeftMenu from './sub/LeftMenuComponent'; 



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
            <LeftMenu numProjects={this.props.projects.length} />
            <ProjectOff projects={this.props.projects} projectsLoading={this.props.projectsLoading} handleProjectClicked={this.handleProjectClicked} />
            <ProjectRecent projects={this.props.projects} projectsLoading={this.props.projectsLoading} handleProjectClicked={this.handleProjectClicked} />
          </Col>

          <Col lg="4">
            <ProjectWorkInProgress 
              projects={this.props.projects} 
              projectsLoading={this.props.projectsLoading} 
              handleProjectClicked={this.handleProjectClicked}
              phases={this.props.phases}
             />
          </Col>

          <Col lg="6">
            {this.state.projectClicked
              ? <ProjectDetails 
                  project={this.state.projectSelected} 
                  phases={this.props.phases.filter((phase) => phase.projectId === this.state.projectSelected.id)}
                  handleCloseDetails={this.handleCloseDetails} 
                  updateProject={this.props.updateProject}></ProjectDetails>
              : <div></div>
            }
          </Col>

        </Row>


      </Container>
      
    );
  }

}

export default HomeComponent; 
