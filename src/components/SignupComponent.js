import React, {Component} from 'react';
import { LocalForm, Control, Errors} from 'react-redux-form';
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
    FormGroup,
    FormFeedback,
    FormText,
    Input,
    Label
} from 'reactstrap'; 

const required = (val) => val && val.length; 
const length = (val) => val && val.length > 5 && val.length < 12; 

const UserNameCheck = (props) =>  
    <FormGroup>
        <Label for="exampleEmail">Username</Label>
        <Input {...props} />

        <Errors
            model=".username"
            show="touched"
            className="text-danger"
            messages={{
                required: 'Required.',
                length: ' Must be between 5 and 12 characters.'
            }}
        />
    </FormGroup>
 
 const PasswordCheck = (props) =>  
    <FormGroup>
        <Label>Password</Label>
        <Input type="password" {...props} />
        <Errors
            model=".password"
            show="touched"
            className="text-danger"
            messages={{
                required: 'Required.'
            }}
        />
    </FormGroup>

const PasswordReCheck = (props) =>  
    <FormGroup>
        <Label>Re-enter Password</Label>
        <Input type="password" {...props} />
        <Errors
            model=".repassword"
            show="touched"
            className="text-danger"
            messages={{
                required: 'Required.'
            }}
        />
    </FormGroup>
 
 const FirstName = (props) =>  
    <FormGroup>
        <Label>First Name</Label>
        <Input {...props} />
        <Errors
            model=".firstname"
            show="touched"
            className="text-danger"
            messages={{
                required: 'Required.'
            }}
        />
    </FormGroup>

class Signup extends Component {
    handleSubmit(values) {
      alert(JSON.stringify(values));
    }
    render() {
      return (
        <Container className="container-spacing landing-container landing-colors" fluid={true}>
            <Row className="justify-content-center">
                <Col md={4} className="landing-container">
                    <Card className="landing-container landing-colors">
                        <CardBody className="text-left">
                            <CardTitle className="text-center">
                                <h2 className="display-4">
                                    Launch Your Projects. 
                                </h2>
                            </CardTitle>
                            <CardSubtitle className="mb-2 lead text-center">
                                Create Your Own Ground Control. 
                                <hr></hr>
                            </CardSubtitle>
                            <CardText className="text-left">
                                <LocalForm
                                    onSubmit={(values) => this.handleSubmit(values)}
                                >
                                    <Control 
                                        model=".firstname" 
                                        component={FirstName}
                                        validators={{required}}
                                    />
                                    <Control 
                                        model=".username" 
                                        component={UserNameCheck} 
                                        validators={{required, length}}
                                    />
                                    <Control 
                                        model=".password" 
                                        component={PasswordCheck} 
                                        validators={{required}}
                                    />                                    
                                    <Control 
                                        model=".repassword" 
                                        component={PasswordReCheck} 
                                        validators={{required}}
                                        
                                    />
                                    <div className="text-center">
                                        <Button size="lg" className="form-labels" type="submit">
                                            Create Account
                                        </Button>        
                                    </div>                               
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

  export default Signup; 
  