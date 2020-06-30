import React from 'react'; 
import {  
  Card,
  CardBody, 
  CardSubtitle, 
  CardTitle, 
  CardText,
  Col,
  Row
 } from 'reactstrap';
 import { Loading } from './LoadingComponent';

function StatisticsProjects(props) {
    let num_projects = props.projects.length; 
    let num_wip_phases = (props.phases.filter((phase) => phase.active === true)).length; 
    let num_phases = props.phases.length; 
    let percent_phases_wip = Math.round(num_wip_phases/num_phases * 100); 
    return (
        <React.Fragment>
             <Row className="my-3 justify-content-center">
                <Col className="stat-cubes">
                    <h3 className="display-4">{num_projects}</h3>
                    <p>Total Open Projects</p>
                </Col>
                <Col className="stat-cubes">
                    <h3 className=" display-4">{num_phases}</h3>
                    <p>Total Open Phases</p>
                </Col>
                <Col md={4} className="stat-cubes">
                    <h3 className="display-4 text-nowrap">{percent_phases_wip}%</h3>
                    <p>Phases In Progress</p>
                </Col>
            </Row>
        </React.Fragment>
    ); 
}

function DashboardCard(props) {
    if (props.projectsLoading) {
        return(
            <Card className="my-2 card-border">
                <CardBody className="text-left">
                    <CardTitle className="text-center">
                        <h2>
                            Weekly Dashboard 
                        </h2>
                        <hr></hr>
                    </CardTitle>
                    <CardSubtitle className="mb-2 lead text-center">
                    </CardSubtitle>
                    <CardText className="text-center">
                            <Loading />
                    </CardText>
                </CardBody>
            </Card>
        );
      } else {
        return(
            <Card className="my-2 card-border">
            <CardBody className="text-left">
                <CardTitle className="text-center">
                    <h2>
                        Weekly Dashboard 
                    </h2>
                    <hr></hr>
                </CardTitle>
                <CardSubtitle className="mb-2 lead text-center">
                </CardSubtitle>
                <CardText className="text-center">
                    <StatisticsProjects projects={props.projects.filter((project) => project.complete === false)} phases={props.phases.filter((phase) => phase.complete === false)}></StatisticsProjects>
                </CardText>
            </CardBody>
        </Card>
        ); 
    }
}

export default DashboardCard; 