import React, { Component } from 'react';
import moment from 'moment';  
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
    for (let key in values.phase) {
      if (values.phase[key] !== this.props.phase[key] ) {
        if (key === 'start' || key === 'end') {
          let date_diff = moment.duration(moment(values.phase[key]).diff(moment(this.props.phase[key]), 'days')); 
          if (date_diff <= 0) {
            changed_vals.push(' ' + key + ' pulled forward by ' + date_diff*(-1) + ' day(s)'); 
          } else {
            changed_vals.push(' ' + key + ' delayed by ' + date_diff + ' day(s)'); 

          }
        } else {
          changed_vals.push(' ' + key + ' updated to ' + values.phase[key]); 
        }
      }
    }
    let entry = {}; 
    entry['projectId'] = this.props.phase.projectId; 
    entry['description'] = this.props.phase.name + ' ' + changed_vals; 
    if (values.entry.notes !== "") {
      entry['notes'] = values.entry.notes; 
    } else {
      entry['notes'] = 'No note entered'
    }
    this.props.updatePhase(phase_id, values.phase); 
    this.props.createLogEntry(entry); 
    this.props.closePhaseUpdateModal(); 
  }

  render() {
    let init_phase = {
      phase: this.props.phase, 
      entry: {}
    }
    return (
      <LocalForm
        onSubmit={(values) => this.handleSubmit(values)}
        initialState= {init_phase}
      >
        <Row className="m-2">
          <Col>
            <Label>Start Date:</Label>
          </Col>
          <Col md={8}>
            <Control.input 
                type="date" 
                model=".phase.start"
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
                model=".phase.end"
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
                  model=".phase.active"
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
                  model=".phase.complete"
                  />
                  &nbsp; 
                  <strong> Phase is Complete</strong>
              </div>
            </Col>
        </Row>
        <Row className="text-center m-2">
          <Col md={5}>Notes: </Col>
          <Col>
            <Control.textarea 
            model=".entry.notes" 
            defaultValue=""
            />
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