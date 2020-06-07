import React, { Component } from 'react';
import {  
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.toggleModal();
    // this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    alert(JSON.stringify(values)); 
  }

  render() {
    return (
      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        <Row className="m-2">
          <Col>
            <Label>Start Date:</Label>
          </Col>
          <Col>
            <Control.input 
                type="date" 
                defaultValue={this.props.phase.start}
                model=".phases.start"
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
          <Col>
            <Control.input 
                type="date" 
                defaultValue={this.props.phase.start}
                model=".phases.start"
                id="idk"
                name="idk"
                className="form-control"
            >
          </Control.input>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <div className="form-check ml-3">
              <Label check>
                  <Control.checkbox 
                  model=".phases.active" 
                  name="agree"
                  className="form-check-input"
                      /> {' '}
                  <strong>Phase is in Progress</strong>

              </Label>
            </div>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <div className="form-check ml-3">
              <Label check>
                  <Control.checkbox 
                  model=".phases.active" 
                  name="agree"
                  className="form-check-input"
                      /> {' '}
                  <strong>Phase is complete</strong>

              </Label>
            </div>
          </Col>
        </Row>
        <Row>
        </Row>
      </LocalForm>
    );
  }
}

export default UpdateProjectForm; 