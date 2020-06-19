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
    if (props.projectsLoading) {
        return(
            <Card className="my-2 card-border">
            <CardBody className="text-left">
                <CardTitle className="pl-2 normal-text text-center">
                    <h6 lead>
                        Ending this Week <Badge className="off-badge">0</Badge>
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
    } else {
        const end_this_week =  props.phases.filter((phase) => moment(phase.end).format("W") === moment().format("W"));
        const week_end_table = end_this_week.map((phase) => {
            const project_name = props.projects[phase.projectId].name; 
            const phase_end = moment(phase.end).format("dddd"); 
            return(
                <tr>
                    <td className="text-left">
                        <span className="project-link" onClick={() => {props.handleClicked(phase.projectId);}}>
                        {project_name}
                        </span>
                        : {phase.name} ending on {phase_end}
                    </td>
                </tr>
            ); 
        }); 
    
        return(
            <Card className="my-2 card-border">
            <CardBody className="text-left">
                <CardTitle className="pl-2 normal-text text-center">
                    <h6 lead>
                        Ending this Week <Badge className="off-badge">{end_this_week.length}</Badge>
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
                                {week_end_table}
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

export default PhasesEndingSoon; 