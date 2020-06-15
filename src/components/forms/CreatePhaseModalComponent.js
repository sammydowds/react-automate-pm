import React, { Component } from 'react';
import {  
  Row, 
  Col,
  Label,
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody
 } from 'reactstrap';
 import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CreatePhaseForm extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(projectId, values) {
    this.props.createPhase(projectId, values);
    this.props.closePhaseCreateModal(); 
  }

  render() {
    return (
      <Modal isOpen={this.props.phaseCreateModal.open} toggle={this.props.closePhaseCreateModal} className="text-center">
        <ModalHeader toggle={this.props.closePhaseCreateModal} className="off-badge">Create New Phase</ModalHeader>
          <ModalBody>
          <LocalForm onSubmit={(values) => this.handleSubmit(this.props.projectId, values)}>
              <Row className="form-group text-center">
                <Label htmlFor="author" md={4}><strong>Phase Name: </strong></Label>
                <Col md={8}>
                  <Control.text model=".name" id="author" name="author"
                    className="form-control"
                    validators={{
                      required, minLength: minLength(1), maxLength: maxLength(50)
                    }} />
                    <Errors
                      className="text-danger"
                      model=".author"
                      show="touched"
                      messages={{
                        required: 'Required',
                        minLength: 'Must be greater than 5 characters',
                        maxLength: 'Must be 20 characters or less'
                      }}
                    />
                </Col>
              </Row>
              <Row className="m-2">
                <Col>
                  <Label>Start Date:</Label>
                </Col>
                <Col md={8}>
                  <Control.input 
                      type="date" 
                      model=".start"
                      id="idk"
                      name="idk"
                      className="form-control"
                  >
                </Control.input>
                </Col>
              </Row>
              <Row className="m-2">
                <Col>
                  <Label>End Date:</Label>
                </Col>
                <Col md={8}>
                  <Control.input 
                      type="date" 
                      model=".end"
                      id="phaseEnd"
                      name="phaseEnd"
                      className="form-control"
                  >
                </Control.input>
                </Col>
              </Row>
              <Row className="text-center m-2">
                <Col md={5}>Status of Project:</Col>
                <Col>
                    <div className="field">
                        <Control.checkbox
                        model=".active"
                        />
                        &nbsp; 
                        <strong> Work in Progress</strong>
                    </div>
                  </Col>
              </Row>
              <Row className="text-center m-2">
                <Col md={5}>Project Active: </Col>
                <Col>
                    <div className="field">
                        <Control.checkbox
                        model=".complete"
                        />
                        &nbsp; 
                        <strong> Phase is Complete</strong>
                    </div>
                  </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
    );
  }
}

export default CreatePhaseForm; 