import React, { Component } from 'react';
import {  
  Button,
  Modal, 
  ModalHeader, 
  ModalBody,
  Row, 
  Col,
  Label, 
  Table
 } from 'reactstrap';
 import { Control, LocalForm, Errors } from 'react-redux-form';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class UpdateProjectForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    this.toggleModal();
    // this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    alert(JSON.stringify(values)); 
  }

  render() {
    const phases_rend = this.props.project.phases.map((phase) => {
        var phasestartId = '${phase.id} + start'
        return(
            <tr>
                <th className="text-left" scope="row">
                    <div className="form-check ml-3">
                        <Label check>
                            <Control.checkbox 
                            model=".phases.active" 
                            name="agree"
                            className="form-check-input"
                                /> {' '}
                            <strong>WIP</strong>

                        </Label>
                    </div>
                    <div className="form-check ml-3">
                        <Label check>
                            <Control.checkbox 
                            model=".phases.complete" 
                            name="agree"
                            className="form-check-input"
                                /> {' '}
                            <strong>Done</strong>
                        </Label>
                    </div>
                </th>
                <td><strong>{phase.name}</strong></td>
                <td>
                    <Control.input 
                        type="date" 
                        defaultValue={phase.start}
                        model=".phases.start"
                        id={phasestartId}
                        name={phasestartId}
                        className="form-control"
                     >
                  </Control.input>
                </td>
                <td>
                    <Control.input 
                        type="date" 
                        defaultValue={phase.end}
                        model=".phases.end" 
                        id="phaseend"
                        name="phaseend"
                        className="form-control"
                        >
                    </Control.input>
                </td>
            </tr>
        ); 
    })
    return (
      <React.Fragment>
        <Modal size="lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader className="off-badge" toggle={this.toggleModal}>Update {this.props.project.name}</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="author" md={3}><strong>Project Name: </strong></Label>
                <Col md={9}>
                  <Control.text model=".name" id="author" name="author"
                    defaultValue={this.props.project.name}
                    className="form-control"
                    validators={{
                      required, minLength: minLength(5), maxLength: maxLength(50)
                    }} />
                    <Errors
                      className="text-danger"
                      model=".author"
                      show="touched"
                      messages={{
                        required: 'Required',
                        minLength: 'Must be greater than 5 characters',
                        maxLength: 'Must be 50 characters or less'
                      }}
                    />
                </Col>
              </Row>
              <Row>
                <Table size="sm" className="text-center overflow-auto" hover responsive>
                    <thead>
                    <tr>
                        <th>Status</th>
                        <th>Phase</th>
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                    </thead>
                    <tbody>
                    {phases_rend}
                    </tbody>
                </Table>
              </Row>
              <Row className="text-center">
                  <Col>
                    <div className="form-check">
                        <Label check>
                            <Control.checkbox 
                            model=".status" 
                            name="agree"
                            className="form-check-input"
                                /> {' '}
                            <strong>Mark Project as Off Track</strong>
                        </Label>
                    </div>
                </Col>
                <Col>
                    <div className="form-check">
                        <Label check>
                            <Control.checkbox 
                            model=".complete" 
                            name="agree"
                            className="form-check-input"
                                /> {' '}
                            <strong>Mark Project as Complete</strong>
                        </Label>
                    </div>
                </Col>
              </Row>
              <Row className="form-group mt-3">
                <Col className="text-right" md={{size: 10, offset: 2}}>
                  <Button type="submit" color="secondary">Submit Updates
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
        <Button outline onClick={this.toggleModal}>
           Update Project
        </Button>
      </React.Fragment>
    );
  }
}

export default UpdateProjectForm; 