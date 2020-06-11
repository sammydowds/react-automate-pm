import React, { Component } from 'react';
import {  
  Row, 
  Col,
  Label,
  Button 
 } from 'reactstrap';
 import { Control, LocalForm, Errors } from 'react-redux-form';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class UpdateProjectForm extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(values) {
    let submitted_vals = Object.assign({}, values); 
    const proj_id = this.props.project.id; 
    if (values.status) {
      const status = values.status === "true" ? true : false; 
      submitted_vals.status = status; 
    }
    this.props.updateProject(proj_id, submitted_vals);
  }

  render() {
    return (
      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        <Row className="form-group text-center">
          <Label htmlFor="author" md={4}><strong>Project Name: </strong></Label>
          <Col md={8}>
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
        <Row className="text-center m-2">
          <Col md={5}>Status of Project:</Col>
          <Col>
              <Label radio>
                  <Control.radio
                  model=".status"
                  value="false"
                  defalutValue={this.props.project.status}
                  />
                  <strong>Off Track</strong>
              </Label>
            </Col>
            <Col>
              <Label radio>
                  <Control.radio
                  model=".status" 
                  value="true"
                  defaultValue={this.props.project.status}
                      /> {' '}
                  <strong>On Track</strong>
              </Label>
            </Col>
        </Row>
        <Row className="text-center m-2">
          <Col md={4}>Project Active: </Col>
          <Col>
            <Label radio>
                <Control.radio
                model=".complete" 
                    /> {' '}
                <strong>Complete</strong>
            </Label>
          </Col>
          <Col>
            <Label radio>
                <Control.radio
                model=".complete" 
                    /> {' '}
                <strong>Not Complete</strong>
            </Label>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </LocalForm>
    );
  }
}

export default UpdateProjectForm; 