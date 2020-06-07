import React, { Component } from 'react';
import {  
  Button,
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
                <td><strong>{this.props.phase.name}</strong></td>
                <td>
                    <Control.input 
                        type="date" 
                        defaultValue={this.props.phase.start}
                        model=".phases.start"
                        id="idk"
                        name="idk"
                        className="form-control"
                    >
                  </Control.input>
                </td>
                <td>
                    <Control.input 
                        type="date" 
                        defaultValue={this.props.phase.end}
                        model=".phases.end" 
                        id="phaseend"
                        name="phaseend"
                        className="form-control"
                        >
                    </Control.input>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </LocalForm>
    );
  }
}

export default UpdateProjectForm; 