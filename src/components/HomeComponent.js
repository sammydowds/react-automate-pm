import React from 'react';
import moment from 'moment'; 
import { 
  Container, 
  Row, 
  Col, 
  Alert
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


function renderHome(props) {
  return(
    <Container className="container-spacing" fluid={true}>
      <Row>
        <Col>
          <Alert color="danger" className="text-center mt-3" fade={false}>
              <h4 className="alert-heading">Black Lives Matter.</h4>
              <p>
                Here at Projectile we believe in accomplishing big things - but only when others arent oppressed. 
                Help the cause. Help create a new history which does not repeat itself.
              </p>
              <p>
                <h5><a href="https://blacklivesmatter.com/">Learn More, and Take Action.</a></h5>
              </p>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert color="warning" className="text-center mt-1" fade={false}>
            Warning: This is a prototype only, and not suitable for production.
          </Alert>
        </Col>
      </Row>
      <Row className="h-100 justify-content-center">
        <Col lg="2">
          <LeftMenu 
            numProjects={props.projects.length} 
            projectCreateModal={props.projectCreateModal} 
            openProjectCreateModal={props.openProjectCreateModal}
            closeProjectCreateModal={props.closeProjectCreateModal}
            createProject={props.createProject}
          />
          <ProjectOff 
            projects={props.projects} 
            projectsLoading={props.projectsLoading} 
            handleProjectClicked={props.openDetails} 
            />
          <PhasesEndingSoon 
            projectsLoading={props.projectsLoading} 
            projects={props.projects} 
            phases={props.phases} 
            handleClicked={props.openDetails}>
          </PhasesEndingSoon>
        </Col>
        <Col lg="7">
          <DashboardCard 
            projectsLoading={props.projectsLoading}
            projects={props.projects} 
            phases={props.phases} 
            log={props.log.filter((entry) => (moment(entry.timestamp, "YYYY-MM-DD") > moment().subtract(5, "days")))}>
          </DashboardCard>

          {props.projectDetails.open
            ? 
                <ProjectDetails 
                  project={props.projects.filter((project) => project.id === props.projectDetails.projectId)[0]}
                  projectsLoading={props.projectsLoading} 
                  phases={props.phases.filter((phase) => phase.projectId === props.projectDetails.projectId)}
                  phasesLoading={props.phasesLoading}
                  handleCloseDetails={props.closeDetails} 
                  updateProject={props.updateProject}
                  updatePhase={props.updatePhase}
                  createPhase={props.createPhase}
                  phaseUpdateModal={props.phaseUpdateModal}
                  phaseCreateModal={props.phaseCreateModal}
                  projectUpdateModal={props.projectUpdateModal}
                  openPhaseUpdateModal={props.openPhaseUpdateModal}
                  closePhaseUpdateModal={props.closePhaseUpdateModal}
                  openProjectUpdateModal={props.openProjectUpdateModal}
                  closeProjectUpdateModal={props.closeProjectUpdateModal}
                  openPhaseCreateModal={props.openPhaseCreateModal}
                  closePhaseCreateModal={props.closePhaseCreateModal}
                  createLogEntry={props.createLogEntry}
                  log={props.log.filter((entry) => (entry.projectId === props.projectDetails.projectId))}
                  deleteProject={props.deleteProject}
                  deleteSinglePhase={props.deleteSinglePhase}
                />
            : <React.Fragment>
              <ProjectWorkInProgress 
                projects={props.projects} 
                projectsLoading={props.projectsLoading} 
                handleProjectClicked={props.openDetails}
                phases={props.phases}
                phasesLoading={props.phasesLoading}
                />
              <CompletedProjects 
                projects={props.projects} 
                projectsLoading={props.projectsLoading} 
                handleProjectClicked={props.openDetails}
                phases={props.phases}
                phasesLoading={props.phasesLoading}
                />
              </React.Fragment>
          }
        

        </Col>
        <Col lg="3">
          <RecentChanges 
            log={props.log.filter((entry) => (moment(entry.timestamp, "YYYY-MM-DD") > moment().subtract(5, "days")))} 
            projectsLoading={props.projectsLoading} 
            projects={props.projects} phases={props.phases} 
            handleClicked={props.openDetails}>
          </RecentChanges>
          <ProjectList handleClicked={props.openDetails} phases={props.phases} projects={props.projects} projectsLoading={props.projectsLoading}></ProjectList>

        </Col>
        
      </Row>


    </Container>
    
  );
}


export default renderHome; 
