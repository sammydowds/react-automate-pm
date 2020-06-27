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
    InputGroup, 
    Input, 
    FormGroup, 
    Label, 
} from 'reactstrap'; 

const required = (val) => val && val.length;

const UserNameCheck = (props) =>  
    <FormGroup>
        <Label for="exampleEmail">Username</Label>
        <Input autoComplete="off" {...props} />
        <Errors
            model=".username"
            className="text-danger"
            show="touched"
            messages={{
                required: 'Required.',
            }}
        />
    </FormGroup>
 
 const PasswordCheck = (props) =>  
    <FormGroup>
        <Label>Password</Label>
        <Input type="password" {...props} />
        <Errors
            model=".password"
            className="text-danger"
            show="touched"
            messages={{
                required: 'Required.',
            }}
        />
    </FormGroup>

class Login extends Component {
    constructor(props) {
        super(props); 
    }
    handleSubmit(values) {
      alert(JSON.stringify(values));
      this.props.checkCredentials(values); 
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
                                    Keep Building. 
                                </h2>
                            </CardTitle>
                            <CardSubtitle className="mb-2 lead text-center">
                                Guide your projects with ease. 
                                <hr></hr>
                            </CardSubtitle>
                            <CardText className="text-left">
                                <LocalForm
                                    onSubmit={(values) => this.handleSubmit(values)}
                                >
                                    <Control 
                                        model=".username" 
                                        validators={{required
                                        }}
                                        component={UserNameCheck}
                                    />
                                    <Control 
                                        model=".password" 
                                        component={PasswordCheck} 
                                        validators={{required
                                        }}
                                    />  
                                    <div className="text-center">
                                        <Button size="lg" className="form-labels" type="submit">
                                            Login
                                        </Button>
                                        <br></br>
                                        {this.props.error
                                            ? <div> Failure to Launch - <strong className="text-danger strong">{this.props.error}</strong></div>
                                            : <div></div>
                                        }      
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

  export default Login; 
  
  