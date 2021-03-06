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
    if (props.projectsLoading && props.phases.isLoading && props.log.isLoading) {
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
    } else if (props.log[0] !== undefined) {
        const log_table = props.log.map((entry) => {
            let matching_proj = props.projects.filter((project) => project.id === entry.projectId); 
                // bug here - need to delete log entries associated with deleted projects at project deletion 
                if (matching_proj[0] !== undefined) {
                    const project_name = matching_proj[0].name; 
                    const time_stamp = moment(entry.timestamp).fromNow();  
                    return(
                        <tr>
                            <td id={entry.id} className="text-left">
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
                                {log_table[0] !== undefined
                                    ? <tbody>{log_table}</tbody>
                                    : <tbody>
                                        <tr>
                                            <td>No log entries tied to your projects.</td>
                                        </tr>
                                    </tbody>
                                }
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