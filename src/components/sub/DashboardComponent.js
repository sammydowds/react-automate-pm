import React, {useState} from 'react'; 
import moment from 'moment'; 
import {  
  Badge, 
  Card,
  CardBody, 
  CardSubtitle, 
  CardTitle, 
  CardText,
  Col,
  Table, 
  Row
 } from 'reactstrap';
 import { Loading } from './LoadingComponent';

function PhasesEndingSoon(props) {
    const end_this_week =  props.phases.filter((phase) => moment(phase.end).format("W") === moment().format("W"));
    const week_end_table = end_this_week.map((phase) => {
        const project_name = props.projects[phase.projectId].name; 
        return(
            <tr>
                <td className="text-center">
                    {phase.name} - Project: {project_name}</td>
            </tr>
        ); 
    })
    const log_table = props.log.map((entry) => {
        const project_name = props.projects[entry.projectId].name;
        const time_stamp = moment(entry.timestamp).fromNow();  
        return(
            <tr>
                <td className="text-center">{project_name}: {entry.description} {time_stamp}</td>
            </tr>
        ); 
    })
    return(
        <Col md={8}>
            <Row className="my-3 justify-content-center">
                <Col className="mx-1">
                    <h6 className="mt-2">Recent Changes <Badge className="off-badge">{props.log.length}</Badge></h6>
                    <div className="log-table">
                        <Table size="sm" className="h-100 overflow-auto">
                            <thead></thead>
                            <tbody className="stats-table-border">
                                {log_table}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
            <Row className="my-3 justify-content-center">
                <Col className="mx-1">
                    <h6 className="mt-2">Phases ending this Week <Badge className="off-badge">{end_this_week.length}</Badge></h6>
                    <div className="log-table">
                    <Table size="sm" className="overflow-auto">
                        <tbody>
                            {week_end_table}
                        </tbody>
                    </Table>
                    </div>
                </Col>
            </Row>
        </Col>
    ); 
}

function StatisticsProjects(props) {
    let num_offtrack = (props.projects.filter((project) => project.status === false)).length; 
    let num_projects = props.projects.length; 
    let percent_project_off = Math.round(num_offtrack/num_projects * 100); 
    let num_wip_phases = (props.phases.filter((phase) => phase.active === true)).length; 
    let num_phases = props.phases.length; 
    let percent_phases_wip = Math.round(num_wip_phases/num_phases * 100); 
    return (
        <Col>
            <Row className="my-3 justify-content-center">
                <Col className="card-border mx-1">
                    <h3 className="display-4">{num_projects}</h3>
                    <p><strong>Projects</strong></p>
                </Col>
                <Col className="card-border mx-1">
                    <h3 className="display-4">{num_phases}</h3>
                    <p><strong>Phases</strong></p>
                </Col>
            </Row>
            <Row className="my-3 justify-content-center">
                <Col className="card-border mx-1 text-nowrap">
                    <h3 className="display-4">{percent_project_off}%</h3>
                    <p><strong> Off Track</strong></p>
                </Col>
                <Col className="card-border mx-1">
                    <h3 className="display-4">{percent_phases_wip}%</h3>
                    <p><strong>Phases In Progress</strong></p>
                </Col>
            </Row>
        </Col>
    ); 
}

function DashboardCard(props) {
    if (props.projectsLoading) {
        return(
          <Loading />
        );
      } else {
        return(
            <Card className="my-2 card-border">
            <CardBody className="text-left">
                <CardTitle className="pl-2 text-center">
                    <h3>
                        Dashboard 
                    </h3>
                </CardTitle>
                <CardSubtitle className="mb-2 lead text-center">
                </CardSubtitle>
                <CardText className="pb-3 text-center">
                    <Row className="align-middle">
                        <StatisticsProjects projects={props.projects} phases={props.phases}></StatisticsProjects>
                        <PhasesEndingSoon phases={props.phases} projects={props.projects} log={props.log}></PhasesEndingSoon>
                    </Row>
                </CardText>
            </CardBody>
        </Card>
        ); 
    }
}

export default DashboardCard; 