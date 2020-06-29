import React, { Component } from 'react';
import moment from 'moment'; 
import { 
  Container, 
  Row, 
  Col
 } from 'reactstrap';
import ProjectWorkInProgress from './sub/ProjectWorkInProgressComponent'; 
import ProjectOff from './sub/ProjectOffTrackComponent'; 
import ProjectDetails from './sub/ProjectDetailsComponent'; 
import LeftMenu from './sub/LeftMenuComponent'; 
import DashboardCard from './sub/DashboardComponent';
import PhasesEndingSoon from './sub/PhasesEndingSoonComponent'; 
import RecentChanges from './sub/RecentChangesComponent';
import ProjectList from './sub/ProjectListComponent';
import CompletedProjects from './sub/CompletedProjectsComponent';  
import Header from './HeaderComponent';  
import { Redirect } from 'react-router-dom'; 


class renderHome extends Component {
  constructor(props){
    super(props); 
  }

  render() {
    if (this.props.projectsError) {
      return(
        <Redirect to='/login' />
      )
    } else {
      return(
        <Container className="container-spacing home-container" fluid={true}>
          <Header />
          <Row className="h-100 justify-content-center">
            <Col lg="2">
              <LeftMenu 
                numProjects={this.props.projects.length} 
                projectCreateModal={this.props.projectCreateModal} 
                openProjectCreateModal={this.props.openProjectCreateModal}
                closeProjectCreateModal={this.props.closeProjectCreateModal}
                createProject={this.props.createProject}
              />
              <ProjectOff 
                projects={this.props.projects} 
                projectsLoading={this.props.projectsLoading} 
                handleProjectClicked={this.props.openDetails} 
                />
              <PhasesEndingSoon 
                projectsLoading={this.props.projectsLoading} 
                projects={this.props.projects} 
                phases={this.props.phases} 
                handleClicked={this.props.openDetails}>
              </PhasesEndingSoon>
            </Col>
            <Col lg="7">
              <DashboardCard 
                projectsLoading={this.props.projectsLoading}
                projects={this.props.projects} 
                phases={this.props.phases} 
                log={this.props.log.filter((entry) => (moment(entry.timestamp, "YYYY-MM-DD") > moment().subtract(5, "days")))}>
              </DashboardCard>
    
              {this.props.projectDetails.open
                ? 
                    <ProjectDetails 
                      project={this.props.projects.filter((project) => project.id === this.props.projectDetails.projectId)[0]}
                      projectsLoading={this.props.projectsLoading} 
                      phases={this.props.phases.filter((phase) => phase.projectId === this.props.projectDetails.projectId)}
                      phasesLoading={this.props.phasesLoading}
                      handleCloseDetails={this.props.closeDetails} 
                      updateProject={this.props.updateProject}
                      updatePhase={this.props.updatePhase}
                      createPhase={this.props.createPhase}
                      phaseUpdateModal={this.props.phaseUpdateModal}
                      phaseCreateModal={this.props.phaseCreateModal}
                      projectUpdateModal={this.props.projectUpdateModal}
                      openPhaseUpdateModal={this.props.openPhaseUpdateModal}
                      closePhaseUpdateModal={this.props.closePhaseUpdateModal}
                      openProjectUpdateModal={this.props.openProjectUpdateModal}
                      closeProjectUpdateModal={this.props.closeProjectUpdateModal}
                      openPhaseCreateModal={this.props.openPhaseCreateModal}
                      closePhaseCreateModal={this.props.closePhaseCreateModal}
                      createLogEntry={this.props.createLogEntry}
                      log={this.props.log.filter((entry) => (entry.projectId === this.props.projectDetails.projectId))}
                      deleteProject={this.props.deleteProject}
                      deleteSinglePhase={this.props.deleteSinglePhase}
                    />
                : <React.Fragment>
                  <ProjectWorkInProgress 
                    projects={this.props.projects} 
                    projectsLoading={this.props.projectsLoading} 
                    handleProjectClicked={this.props.openDetails}
                    phases={this.props.phases}
                    phasesLoading={this.props.phasesLoading}
                    />
                  <CompletedProjects 
                    projects={this.props.projects} 
                    projectsLoading={this.props.projectsLoading} 
                    handleProjectClicked={this.props.openDetails}
                    phases={this.props.phases}
                    phasesLoading={this.props.phasesLoading}
                    />
                  </React.Fragment>
              }
            </Col>
            <Col lg="3">
              <RecentChanges 
                log={this.props.log.filter((entry) => (moment(entry.timestamp, "YYYY-MM-DD") > moment().subtract(5, "days")))} 
                projectsLoading={this.props.projectsLoading} 
                projects={this.props.projects} phases={this.props.phases} 
                handleClicked={this.props.openDetails}>
              </RecentChanges>
              <ProjectList handleClicked={this.props.openDetails} phases={this.props.phases} projects={this.props.projects} projectsLoading={this.props.projectsLoading}></ProjectList>
            </Col>
          </Row>
        </Container>
      );
  }
}
  
}


export default renderHome; 
