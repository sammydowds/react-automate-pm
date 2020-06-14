import React, { Component } from 'react';
import {  
  Row,
  Col,  
  Label, 
  Button
 } from 'reactstrap';
 import { Control, LocalForm } from 'react-redux-form';

class UpdatePhaseForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(values) {
    const phase_id = this.props.phase.id; 
    this.props.updatePhase(phase_id, values); 
    this.props.closePhaseModal(); 
    // this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  handleChange(values) {
    console.log("CHANGE"); 
    console.log(values); 
    // this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  handleUpdate(values) {
    console.log("UDPATE"); 
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
          <Col className="text-left">
              <div className="field">
                  <Control.checkbox
                  model=".active"
                  defaultValue={this.props.phase.active}
                  />
                  &nbsp; 
                  <strong> Work in Progress</strong>
              </div>
            </Col>
        </Row>
        <Row className="text-center m-2">
          <Col md={5}>Project Active: </Col>
          <Col className="text-left">
              <div className="field">
                  <Control.checkbox
                  model=".complete"
                  defaultValue={this.props.phase.complete}
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
    );
  }
}

export default UpdatePhaseForm; 