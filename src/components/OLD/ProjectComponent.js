import React, { Component } from 'react';
import { 
  Container, 
  Row, 
  Col,   
  Breadcrumb, 
  BreadcrumbItem
 } from 'reactstrap';
import LeftMenu from './LeftMenuComponent'; 

class ProjectComponent extends Component {

constructor(props) {
  super(props);
}

render () {
    console.log(this.props); 
    return(
      <Container className="container-spacing" fluid={false}>
        <Row className="h-100 justify-content-center">

        <Col xl="2" className="mt-3 pt-3 pb-5">
            <LeftMenu/>
        </Col>

        <Col xl="7" className="pb-5">
            <ProjectDetails project={this.props.project} projectsLoading={this.props.isLoading} />
        </Col>
          
        <Col xl="3">
            <RightMenu />
        </Col>

        </Row>
      </Container>
      
    );
  }

}

export default ProjectComponent; 