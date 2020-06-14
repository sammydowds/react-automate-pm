import React from 'react';
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

function renderHome(props) {
  return(
    <Container className="container-spacing" fluid={true}>
      <Row className="h-100 justify-content-center">
        <Col lg="2">
          <LeftMenu numProjects={props.projects.length} />
          <ProjectOff 
            projects={props.projects} 
            projectsLoading={props.projectsLoading} 
            handleProjectClicked={props.openDetails} 
            />
          <ProjectRecent 
            projects={props.projects} 
            projectsLoading={props.projectsLoading} 
            handleProjectClicked={props.openDetails} 
            />
        </Col>

        <Col lg="4">
          <ProjectWorkInProgress 
            projects={props.projects} 
            projectsLoading={props.projectsLoading} 
            handleProjectClicked={props.openDetails}
            phases={props.phases}
            />
        </Col>

        <Col lg="6">
          {props.projectDetails.open
            ? <ProjectDetails 
                project={props.projects[props.projectDetails.projectId]} 
                phases={props.phases.filter((phase) => phase.projectId === props.projectDetails.projectId)}
                handleCloseDetails={props.closeDetails} 
                updateProject={props.updateProject}
                updatePhase={props.updatePhase}
                phaseModal={props.phaseModal}
                projectModal={props.projectModal}
                openPhaseModal={props.openPhaseModal}
                closePhaseModal={props.closePhaseModal}
                openProjectModal={props.openProjectModal}
                closeProjectModal={props.closeProjectModal}
              />
            : <div></div>
          }
        </Col>

      </Row>


    </Container>
    
  );
}


export default renderHome; 
