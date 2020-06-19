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

function RecentChanges(props) {
    if (props.projectsLoading) {
        return(
            <Card className="my-2 card-border">
            <CardBody className="text-left">
                <CardTitle className="pl-2 text-center">
                    <h3>
                        Recent Changes <Badge className="off-badge">0</Badge>
                    </h3>
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
    } else {
        const log_table = props.log.map((entry) => {
            const project_name = props.projects[entry.projectId].name;
            const time_stamp = moment(entry.timestamp).fromNow();  
            return(
                <tr>
                    <td className="text-left">
                        <span className="project-link" onClick={() => {props.handleClicked(entry.projectId);}}>
                            {project_name}
                        </span>
                        : {entry.description} {time_stamp}
                    </td>
                </tr>
            ); 
        })
        return(
            <Card className="my-2 card-border">
            <CardBody className="text-left">
                <CardTitle className="pl-2 text-center">
                    <h3>
                        Recent Changes <Badge className="off-badge">{props.log.length}</Badge>
                    </h3>
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
    }
   
}

export default RecentChanges; 