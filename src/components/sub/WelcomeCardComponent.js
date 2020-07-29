import React from 'react'; 
import moment from 'moment'; 
import {  
  Card,
  CardBody, 
  CardSubtitle, 
  CardTitle, 
  CardText
 } from 'reactstrap';
 import { Loading } from './LoadingComponent';

function WelcomeCard(props) {
    if (props.phasesLoading) {
        return(
            <Card className="my-2 card-border">
                <CardBody className="text-left">
                    <CardTitle className="text-center">
                        <h2>
                            Please wait while we run some calculations.  
                        </h2>
                        <hr></hr>
                    </CardTitle>
                    <CardSubtitle className="mb-2 lead text-center">
                    </CardSubtitle>
                    <CardText className="text-center">
                            <Loading />
                    </CardText>
                </CardBody>
            </Card>
        );
      } else {
        const end_this_week =  props.phases.filter((phase) => moment(phase.end).format("W") === moment().format("W") && moment(phase.end).format("Y") === moment().format("Y") && phase.complete === false);
        const starting_this_week =  props.phases.filter((phase) => moment(phase.start).format("W") === moment().format("W") && moment(phase.start).format("Y") === moment().format("Y") && phase.complete === false);
        let num_ending_this_week = end_this_week.length; 
        let num_starting_this_week = starting_this_week.length; 
        let log_changes = props.log.length; 
        return(
            <Card className="my-2 card-border">
            <CardBody className="text-left">
                <CardTitle className="text-center">
                    <h2>
                        Welcome! Today is <strong>{moment().format('dddd, MMMM Do YYYY')}</strong>. 
                    </h2>
                    <hr></hr>
                </CardTitle>
                <CardSubtitle className="mb-2 lead text-center">
                </CardSubtitle>
                <CardText className="text-left lead">
                   <strong>{num_ending_this_week} phases </strong> have deadlines this week. <strong>{num_starting_this_week} phases </strong> are launching this week. <strong>{log_changes} project changes </strong> have occured in the last 48 hours. 
                </CardText>
            </CardBody>
        </Card>
        ); 
    }
}

export default WelcomeCard; 