import React from 'react'; 
import {  
  Card,
  CardBody, 
  CardSubtitle, 
  CardTitle, 
  CardText,
  Table
 } from 'reactstrap';
 import { Loading } from './LoadingComponent';

function ProjectList(props) {
    if (props.projectsLoading) {
        return(
            <Card className="my-2 card-border">
                <CardBody className="text-left">
                    <CardTitle className="pl-2 text-center">
                        <h3>
                            Open Projects 
                        </h3>
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
        const projects = props.projects.filter((project) => project.complete === false); 
        const project_rows = projects.map((project) => {
            return (
                <tr>
                    <td>
                        <span className="project-link" onClick={() => {props.handleClicked(project.id);}}>
                            {project.name}
                        </span>
                    </td>
                </tr>
            ); 
        })
        return(
            <Card className="my-2 card-border">
            <CardBody className="text-left">
                <CardTitle className="pl-2 text-center">
                    <h3>
                        Open Projects 
                    </h3>
                    <hr></hr>
                </CardTitle>
                <CardSubtitle className="mb-2 lead text-center">
                </CardSubtitle>
                <CardText className="text-center">
                    <Table size="sm" borderless>
                        <tbody>
                            {project_rows}
                        </tbody>
                    </Table>
                </CardText>
            </CardBody>
        </Card>
        ); 
    }
}

export default ProjectList; 