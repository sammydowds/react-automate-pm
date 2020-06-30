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
    const proj_id = this.props.project.id; 
    this.props.updateProject(proj_id, values);
    this.props.closeProjectUpdateModal(); 
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
          <Col md={5}>Project Active: </Col>
          <Col>
              <div className="field">
                  <Control.checkbox
                  model=".complete"
                  defaultValue={this.props.project.complete}
                  />
                  &nbsp; 
                  <strong> Project is Complete</strong>
              </div>
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