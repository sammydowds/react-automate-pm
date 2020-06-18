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

function PhasesThisWeek(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const start_this_week = props.phases.filter((phase) => moment(phase.start).format("W") === moment().format("W"));
    const end_this_week =  props.phases.filter((phase) => moment(phase.end).format("W") === moment().format("W"));
    const week_start_table = start_this_week.map((phase) => {
        const project_name = props.projects[phase.projectId].name; 
        return(
            <tr>
                <td>{phase.name}</td>
                <td>Project: {project_name}</td>
            </tr>
        ); 
    })
    const week_end_table = end_this_week.map((phase) => {
        const project_name = props.projects[phase.projectId].name; 
        return(
            <tr>
                <td>{phase.name}</td>
                <td>Project: {project_name}</td>
            </tr>
        ); 
    })
    return(
            <React.Fragment>
            <Row className="my-3 justify-content-center">
                <Col md={12}className="card-border mx-1">
                    <h6 className="mt-2">Phases starting this Week <Badge className="off-badge">{start_this_week.length}</Badge></h6>
                    <div className="stats-table">
                        <Table size="sm" className="h-100 overflow-auto">
                            <thead></thead>
                            <tbody className="stats-table-border">
                                {week_start_table}
                            </tbody>
                        </Table>
                    </div>
                </Col>
                </Row>
            <Row className="my-3 justify-content-center">
                <Col md={12} className="card-border mx-1">
                    <h6 className="mt-2">Phases ending this Week <Badge className="off-badge">{end_this_week.length}</Badge></h6>
                    <div className="stats-table">
                    <Table size="sm" className="overflow-auto">
                        <tbody>
                            {week_end_table}
                        </tbody>
                    </Table>
                    </div>
                </Col>
            </Row>
            </React.Fragment>
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
        <React.Fragment>
            <Col>
                <Row className="my-3 justify-content-center">
                    <Col md={4} className="card-border mx-1">
                        <h3>{num_projects}</h3>
                        <p><strong>Projects</strong></p>
                    </Col>
                    <Col md={4} className="card-border mx-1">
                        <h3>{num_phases}</h3>
                        <p><strong>Phases</strong></p>
                    </Col>
                </Row>
                <Row className="my-3 justify-content-center">
                    <Col md={4} className="card-border mx-1 text-nowrap">
                        <h3>{percent_project_off}%</h3>
                        <p><strong> Off Track</strong></p>
                    </Col>
                    <Col md={4} className="card-border mx-1">
                        <h3>{percent_phases_wip}%</h3>
                        <p><strong>Phases In Progress</strong></p>
                    </Col>
                </Row>
            </Col>
            <Col>
                <PhasesThisWeek phases={props.phases} projects={props.projects}></PhasesThisWeek>
            </Col>
        </React.Fragment>
    ); 
}

function StatsCard(props) {
    if (props.projectsLoading) {
        return(
          <Loading />
        );
      } else {
        return(
            <Card className="my-2 card-border">
            <CardBody className="text-left">
                <CardTitle className="pl-2 text-center">
                    <h5 className="display-4">
                        Dashboard 
                    </h5>
                </CardTitle>
                <CardSubtitle className="mb-2 lead text-center">
                </CardSubtitle>
                <CardText className="pl-3 pb-3 text-center">
                    <Row>
                        <StatisticsProjects projects={props.projects} phases={props.phases}></StatisticsProjects>
                    </Row>
                    {/* <PhasesThisWeek phases={props.phases} projects={props.projects}></PhasesThisWeek>
                    <PhasesThisMonth phases={props.phases} projects={props.projects}></PhasesThisMonth> */}
                </CardText>
            </CardBody>
        </Card>
        ); 
    }
}

export default StatsCard; 