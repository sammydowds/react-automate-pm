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
  }

  handleSubmit(values) {
    const phase_id = this.props.phase.id;
    let changed_vals = []; 
    //collecting changed fields 
    for (let key in values) {
      if (values[key] != this.props.phase[key] ) {
        changed_vals.push(key); 
      }
    }
    let entry = {}; 
    entry['projectId'] = this.props.phase.projectId; 
    entry['description'] = this.props.phase.name + ' ' + changed_vals + ' updated'
    this.props.updatePhase(phase_id, values); 
    this.props.createLogEntry(entry); 
    this.props.closePhaseUpdateModal(); 
  }

  render() {
    return (
      <LocalForm
        onSubmit={(values) => this.handleSubmit(values)}
        initialState={this.props.phase}
        >
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
    );
  }
}

export default UpdatePhaseForm; 