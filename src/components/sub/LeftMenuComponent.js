import React from 'react'; 
import {
    Card, 
    ListGroup, 
    ListGroupItem, 
    Badge
} from 'reactstrap';
import CreateProjectForm from '../forms/CreateProjectModalComponent'; 

const LeftMenu = (props) => {
    return(
        <React.Fragment>
            <Card className="mt-2 font-weight-bold card-border">
                <ListGroup vertical className="text-center w-100" flush>
                    <ListGroupItem className="text-center" tag="button" action onClick={props.openProjectCreateModal}>
                        <div>
                            <svg class="bi bi-plus-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                            <path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"/>
                            <path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/>
                            </svg>
                            &nbsp; 
                            <strong>Add Project</strong>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem tag="button" className="text-center" action disabled>All Projects <Badge> {props.numProjects} </Badge></ListGroupItem>
                    <ListGroupItem tag="button" className="text-center" action disabled>Learn</ListGroupItem>
                    <ListGroupItem tag="button" className="text-center" disabled>My Profile</ListGroupItem>
                </ListGroup>
            </Card>
            <CreateProjectForm 
                projectCreateModal={props.projectCreateModal} 
                closeProjectCreateModal={props.closeProjectCreateModal} 
                createProject={props.createProject}>
            </CreateProjectForm>
        </React.Fragment>

    ); 
}

export default LeftMenu; 
