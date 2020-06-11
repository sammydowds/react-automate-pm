import React, { Component } from 'react';
import {  
  Row,
  Col,  
  Label, 
  Table, 
  Button
 } from 'reactstrap';
 import { Control, LocalForm, Errors } from 'react-redux-form';

class UpdateProjectForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(values) {
    alert(JSON.stringify(values)); 
    alert('Phase ID: ' + this.props.phase.id)
    // this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  handleChange(values) {
    console.log(values); 
    // this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  handleUpdate(values) {
    console.log(values); 
    // this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
  }



  render() {
    return (
      <LocalForm 
        onUpdate={(values) => this.handleUpdate(values)} 
        onChange={(values) => this.handleChange(values)} 
        onSubmit={(values) => this.handleSubmit(values)}>
        <Row className="m-2">
          <Col>
            <Label>Start Date:</Label>
          </Col>
          <Col>
            <Control.input 
                type="date" 
                defaultValue={this.props.phase.start}
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
          <Col>
            <Control.input 
                type="date" 
                defaultValue={this.props.phase.end}
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
              <Label radio>
                  <Control.radio
                  model=".status" 
                  name="status"
                  value="true"
                      /> {' '}
                  <strong>Off Track</strong>
              </Label>
            </Col>
            <Col>
              <Label radio>
                  <Control.radio
                  model=".status" 
                  name="status"
                  value="false"
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