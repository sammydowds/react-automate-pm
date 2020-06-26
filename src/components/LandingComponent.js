import React, { useState } from 'react';
import {
  Container, 
  Row,
  Col, 
  Jumbotron, 
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom'; 

const Login = () => {
  return (
    <Container className="container-spacing landing-container landing-colors" fluid={true}>
        <Row>
          <Col>
          <Jumbotron className="text-center landing-colors">
            <img src="assets/images/profileprojectile.png" width="200px" height="200px"></img>
              <h1 className="display-3">Launch your projects. </h1>
              <p className="lead">Guide your projects to success with an informative and easy to use interface.</p>
              <p>
                <Link to='/signup'><Button size="lg" className="form-labels mx-2">Sign Up</Button></Link><Link to='/login'><Button className="mx-2" size="lg">Log In</Button></Link>
              </p>
          </Jumbotron>
          </Col>
        </Row>
        <Row className="p-5">
          <Col className="text-center">
            <p><h2 className="display-4 pb-5">One Single Page. </h2></p> 
            <img src="assets/images/home_page.gif" className="responsive-gif" />
          </Col>
        </Row>
        <Row className="p-5">
          <Col className="text-center">
            <p><h2 className="display-4 pb-5">Add Projects. </h2></p> 
            <p> <img src="assets/images/new_proj.gif" className="responsive-gif" ></img></p>
          </Col>
        </Row>
        <Row className="p-5">
          <Col className="text-center">
            <p><h2 className="display-4 pb-5">Add Phases. </h2></p> 
            <p> <img src="assets/images/create_phase.gif" className="responsive-gif" ></img></p>
          </Col>
        </Row>
        <Row className="p-5">
          <Col className="text-center">
            <p><h2 className="display-4 pb-5">Share. </h2></p> 
            <p> <img src="assets/images/copy_phase.gif" className="responsive-gif" ></img></p>
          </Col>
        </Row>
    </Container>
  );
}

export default Login;