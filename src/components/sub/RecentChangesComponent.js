import React from 'react'; 
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

function RecentChanges(props) {
    if (props.projectsLoading) {
        return(
            <Card className="my-2 card-border">
            <CardBody className="text-left">
            <CardTitle className="pl-2 text-center normal-text">
                    <h6 lead>
                        Recent Changes <Badge className="off-badge">{props.log.length}</Badge>
                    </h6>
                    <hr></hr>
                </CardTitle>
                <CardSubtitle className="mb-2 lead text-center">
                </CardSubtitle>
                <CardText className="text-center">
                <Row className="my-3 justify-content-center">
                    <Col className="mx-1">
                        <div className="stats-table">
                        <Table size="sm" className="overflow-auto" borderless hover>
                            <tbody>
                                <Loading />
                            </tbody>
                        </Table>
                        </div>
                    </Col>
                </Row>
                </CardText>
            </CardBody>
        </Card>
        ); 
    } else if (props.log.length !== 0) {
        const log_table = props.log.map((entry) => {
            let matching_proj = props.projects.filter((project) => project.id === entry.projectId); 
            //if there is a project that matches the id of the entry, return name
            if (matching_proj.length[0]) {
                // need to fix this below, entry can exist and maintain a projectId that no longer exists 
                const project_name = matching_proj[0].name; 
                const time_stamp = moment(entry.timestamp).fromNow();  
                return(
                    <tr>
                        <td className="text-left">
                            <span className="project-link" onClick={() => {props.handleClicked(entry.projectId);}}>
                                {project_name}
                            </span>
                            : {entry.description} 
                            <br>
                            </br>
                            <small>{time_stamp}</small>
                        </td>
                    </tr>
                ); 
            //returns if there are no projects tied to the log entry - indicating the project has been deleted
            } else {
                return(
                    <tr>
                        <td className="text-left">No log entries tied to your projects.</td>
                    </tr> 
                ); 
            }
        })
        return(
            <Card className="my-2 card-border">
            <CardBody className="text-left">
                <CardTitle className="pl-2 text-center normal-text">
                    <h6 lead="true">
                    Recent Changes <Badge className="off-badge">{props.log.length}</Badge>

                    </h6>
                    <hr></hr>
                </CardTitle>
                <CardSubtitle className="mb-2 lead text-center">
                </CardSubtitle>
                <CardText className="text-center">
                <Row className="my-3 justify-content-center">
                    <Col className="mx-1">
                        <div className="stats-table">
                        <Table size="sm" className="overflow-auto" borderless hover>
                            <tbody>
                                {log_table}
                            </tbody>
                        </Table>
                        </div>
                    </Col>
                </Row>
                </CardText>
            </CardBody>
        </Card>
        ); 
    } else {
        // Returns when there are no logs 
        return(
            <Card className="my-2 card-border">
            <CardBody className="text-left">
                <CardTitle className="pl-2 text-center normal-text">
                    <h6 lead="true">
                    Recent Changes <Badge className="off-badge">{props.log.length}</Badge>  
                    </h6>
                    <hr></hr>
                </CardTitle>
                <CardSubtitle className="mb-2 lead text-center">
                </CardSubtitle>
                {/* Structural issues here with <p> */}
                <CardText className="text-center">
                    <Row className="my-3 justify-content-center">
                        <Col className="mx-1">
                            <div className="stats-table">
                                <Table size="sm" className="overflow-auto" borderless hover>
                                    <tbody>
                                        <tr>
                                        <td>None</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </CardText>
            </CardBody>
        </Card> 
        );
    }
   
}

export default RecentChanges; 