import React, {Component} from 'react';
import { LocalForm, Control} from 'react-redux-form';
import {
    Button,
    Container,
    Col,
    Row, 
    Card,
    CardBody,
    CardText,
    CardSubtitle,
    CardTitle, 
    InputGroup, 
    Input, 
    InputGroupAddon, 
    InputGroupText
} from 'reactstrap'; 

const UserNameInput = (props) => 
        <InputGroup>
            <Input {...props} placeholder="Username..." className="form-fields"/>
        </InputGroup>

const PasswordInput = (props) => 
        <InputGroup>
            <Input {...props} placeholder="Password..." className="form-fields"/>
        </InputGroup>

class Login extends Component {
    handleSubmit(values) {
      alert(JSON.stringify(values));
    }
    render() {
      return (
        <Container className="container-spacing landing-container landing-colors" fluid={true}>
            <Row className="justify-content-center">
                <Col md={4} className="mt-3 landing-container">
                    <Card className="my-2 landing-container landing-colors">
                        <CardBody className="text-left">
                            <CardTitle className="text-center">
                                <h2 className="display-4">
                                    Keep Building. 
                                </h2>
                            </CardTitle>
                            <CardSubtitle className="mb-2 lead text-center">
                                Guide your projects with ease. 
                                <hr></hr>
                            </CardSubtitle>
                            <CardText className="text-center">
                                <LocalForm
                                    onSubmit={(values) => this.handleSubmit(values)}
                                >
                                    <Row className="m-2">
                                        <Control.text model=".username" component={UserNameInput} />
                                    </Row>
                                    <Row className="m-2">
                                        <Control.text model=".password" component={PasswordInput} />                                    
                                    </Row>
                                    <Button className="form-labels" type="submit">
                                        Login
                                    </Button>                               
                                </LocalForm>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
      )
    }
  }

  export default Login; 
  
  