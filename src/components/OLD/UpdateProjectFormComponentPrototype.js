import React, { useState } from 'react';
import {  
  Button,
  Modal, 
  ModalHeader, 
  ModalBody,
  Row, 
  Col, 
 } from 'reactstrap';
 import {
  Switch,
  TextField
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form"; 


export const UpdateProjectForm = (props) => {
  const {
    buttonLabel = "Update Project",
    className
  } = props;

  const defaultVals = {
    projectStatus: true 
    }
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const { handleSubmit, control } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));

  const phaseInput = props.project.phases.map((phase) => {
      return(
        <tr>
            <td>
                <Controller disabled as={TextField} name="project.phases.name" control={control} label="Name" fullWidth defaultValue={phase.name} />
            </td>
            <td>
                <TextField
                    name="project.phases.start"
                    label="Start"
                    type="date"
                    defaultValue={phase.start}
                    control={control}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </td>
            <td>
                <TextField
                    name="project.phases.end"
                    label="End"
                    type="date"
                    defaultValue={phase.end}
                    control={control}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </td>
            <td>
                <label>In Progress</label>
                <Controller defaultValue={phase.active} label="WIP" as={Switch} name="project.phases.active" control={control} label="Active" />
            </td>
            <td>
                <label>Done</label>
                <Controller defaultValue={phase.complete} label="complete" as={Switch} name="project.phases.complete" control={control} label="Active" />
            </td>
        </tr>
      );
  }); 

  return (
    <div>
      <Button color="secondary" onClick={toggle}>{buttonLabel}</Button>
      <Modal size="lg" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Update {props.project.name}</ModalHeader>
        <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <Row className="py-3">
                    <Col>
                        <Controller size="large" as={TextField} name="project.name" control={control} label="Project Name" fullWidth defaultValue={props.project.name} />
                    </Col>
                </Row>
                <Row className="pb-3 text-center">
                    <Col>
                        <label>Project Off Track</label>
                        <Controller
                        as={Switch}
                        type="checkbox"
                        name="project.status"
                        control={control}
                        defaultValue={!props.project.status}
                        />
                        <label>Project Complete</label>
                        <Controller
                        as={Switch}
                        type="checkbox"
                        name="project.complete"
                        control={control}
                        defaultValue={props.project.complete}
                        />
                    </Col>
                </Row>
                <div className="lead text-center">Project Phases</div>
                <Row>
                    <table className="table table-borderless table-striped">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {phaseInput}
                        </tbody>
                    </table>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
