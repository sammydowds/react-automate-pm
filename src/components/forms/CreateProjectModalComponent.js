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

class CreateProjectForm extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(values) {
    this.props.createProject(values);
    this.props.closeProjectCreateModal(); 
  }

  render() {
    const init_proj = {
      complete: false,
      status: false
    }
    return (
      <Modal isOpen={this.props.projectCreateModal.open} toggle={this.props.closeProjectCreateModal} className="text-center">
        <ModalHeader toggle={this.props.closeProjectCreateModal} className="off-badge">Create New Project</ModalHeader>
          <ModalBody>
            <LocalForm 
              onSubmit={(values) => this.handleSubmit(values)}
              initialState={init_proj}
              >
              <Row className="form-group text-center">
                <Label htmlFor="author" md={4}><strong>Project Name: </strong></Label>
                <Col md={8}>
                  <Control.text model=".name" id="author" name="author"
                    className="form-control"
                    validators={{
                      required, minLength: minLength(1), maxLength: maxLength(50)
                    }} />
                    <Errors
                      className="text-danger"
                      model=".name"
                      show="touched"
                      messages={{
                        required: 'Required',
                        minLength: 'Must be greater than 5 characters',
                        maxLength: 'Must be 50 characters or less'
                      }}
                    />
                </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <Button type="submit">Create</Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
    );
  }
}

export default CreateProjectForm; 