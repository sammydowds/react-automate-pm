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
}

  render () {
    return(
      <Container className="container-spacing" fluid={true}>
        <Row className="h-100 justify-content-center">

          <Col lg="2">
            <LeftMenu numProjects={this.props.projects.length} />
            <ProjectOff projects={this.props.projects} projectsLoading={this.props.projectsLoading} handleProjectClicked={this.props.openDetails} />
            <ProjectRecent projects={this.props.projects} projectsLoading={this.props.projectsLoading} handleProjectClicked={this.props.openDetails} />
          </Col>

          <Col lg="4">
            <ProjectWorkInProgress 
              projects={this.props.projects} 
              projectsLoading={this.props.projectsLoading} 
              handleProjectClicked={this.props.openDetails}
              phases={this.props.phases}
             />
          </Col>

          <Col lg="6">
            {this.props.projectDetails.open
              ? <ProjectDetails 
                  project={this.props.projects[this.props.projectDetails.projectId]} 
                  phases={this.props.phases.filter((phase) => phase.projectId === this.props.projectDetails.projectId)}
                  handleCloseDetails={this.handleCloseDetails} 
                  updateProject={this.props.updateProject}
                  updatePhase={this.props.updatePhase}>
                </ProjectDetails>
              : <div></div>
            }
          </Col>

        </Row>


      </Container>
      
    );
  }

}

export default HomeComponent; 
