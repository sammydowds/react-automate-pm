import React, { useState } from 'react';
import {
  Container, 
  Row,
  Col, 
  Jumbotron
} from 'reactstrap';

const Login = (props) => {
  return (
    <Container className="landing-container" fluid={true}>
        <Row className="pt-5">
            <Col>
              <div>
                <Jumbotron className="landing-container text-center" fluid>
                  <Container className="landing-container" fluid>
                  <img src="assets/images/profileprojectile.png" width="200px" height="200px"></img>
                    <h1 className="display-3">Launch your projects. </h1>
                    <p className="lead">Guide your projects to success with an informative and easy to use interface.</p>
                  </Container>
                </Jumbotron>
              </div>
            </Col>
        </Row>
        <hr></hr>
        <Row className="m-5">
            <Col md={5} className="text-right">
                <h2>An Efficient Home Page.</h2>
                <p className="lead"> Find the most important information, quickly.</p>
            </Col>
            <Col md={7}>
                <img src="assets/images/home_page.gif" width="600px" height="300px"></img>
            </Col>
        </Row>
        <hr></hr>
        <Row className="m-5">
            <Col md={7} className="text-right">
                <img src="assets/images/new_proj.gif" width="600px" height="300px"></img>
            </Col>
            <Col md={5} className="text-left">
                <h2>Add Projects.</h2>
                <p className="lead"> A simple to use interface, which makes adding and editing project information straight forward.</p>
            </Col>
        </Row>
        <hr></hr>
        <Row className="m-5">
            <Col md={5} className="text-right">
                <h2>Add Phases.</h2>
                <p className="lead"> A simple to use interface, which makes adding and editing project information straight forward.</p>
            </Col>
            <Col md={7} className="text-left">
                <img src="assets/images/create_phase.gif" width="600px" height="300px"></img>
            </Col>
        </Row>
        <hr></hr>
        <Row className="m-5 text-center">
            <Col md={7} className="text-right">
                <img src="assets/images/copy_phase.gif" width="600px" height="200px"></img>
            </Col>
            <Col md={5} className="text-left">
                <h2>Easily Share.</h2>
                <p className="lead"> Copy and Paste import information into emails.</p>
            </Col>
        </Row>
        <hr></hr>
        <Row className="m-5">
        </Row>
    </Container>
  );
}

export default Login;