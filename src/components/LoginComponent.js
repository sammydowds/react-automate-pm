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
    CardTitle
} from 'reactstrap'; 


class Login extends Component {
    handleSubmit(values) {
      alert(JSON.stringify(values));
    }
    render() {
      return (
        <Container className="container-spacing" fluid={true}>
            <Row className="justify-content-center">
                <Col md={4} className="mt-3">
                    <Card className="my-2 card-border">
                        <CardBody className="text-left">
                            <CardTitle className="text-center">
                                <h2>
                                    Login
                                </h2>
                            </CardTitle>
                            <CardSubtitle className="mb-2 lead text-center">
                                And Continue to Build the Future.
                                <hr></hr>
                            </CardSubtitle>
                            <CardText className="text-center">
                                <LocalForm
                                    model="user"
                                    onSubmit={(values) => this.handleSubmit(values)}
                                >
                                    <div className="field">
                                        <label>Username: </label>
                                        <Control.text model=".user.username" />
                                    </div>
                        
                                    <div className="field">
                                        <label>Password: </label>
                                        <Control.text model=".user.password" />
                                    </div>
                                    <Button className="off-badge" type="submit">
                                        Submit
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
  