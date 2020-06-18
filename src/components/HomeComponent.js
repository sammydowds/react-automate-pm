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
import ProjectRecent from './sub/ProjectRecentUpdateComponent'; 
import ProjectDetails from './sub/ProjectDetailsComponent'; 
import LeftMenu from './sub/LeftMenuComponent'; 
import StatsCard from './sub/StatsComponent';


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
        </Col>

        <Col lg="3">
          <ProjectWorkInProgress 
            projects={props.projects} 
            projectsLoading={props.projectsLoading} 
            handleProjectClicked={props.openDetails}
            phases={props.phases}
            />
        </Col>

          {props.projectDetails.open
            ? 
              <Col lg="7">
                <ProjectDetails 
                  project={props.projects[props.projectDetails.projectId]} 
                  phases={props.phases.filter((phase) => phase.projectId === props.projectDetails.projectId)}
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
                  log={props.log.filter((entry) => (entry.projectId === props.projectDetails.projectId && (moment(entry.timestamp, "YYYY-MM-DD") > moment().subtract(5, "days"))))}
                />
              </Col>
            : <Col lg="7">
                <StatsCard projects={props.projects} phases={props.phases}></StatsCard>
              </Col>
          }

      </Row>


    </Container>
    
  );
}


export default renderHome; 
