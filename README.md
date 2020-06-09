## Automating Project Management - React App (Front End)

Today's project management apps have tried to incorporate messaging, task management, and resource management into their platforms - and I propose that this loses sight of easily viewing and sharing project info. This is an attempt to create a happy medium where you can copy/paste information into emails and store all project data in one place.  

This is a follow up project to a previous version completed in Django. This React app is designed to separate the front end as its own app, which will ideally be integrated with a Django REST API as the second part of the project. 

Live (without json-server): https://sammydowds.github.io/react-automate-pm/

![Image of Design](https://github.com/sammydowds/react-automate-pm/blob/master/public/assets/images/Sample_Screen.png)

## Data Structure 
### Projects
    {
        "id": 0,
        "name": "Custom Web App: Fortune 100",
        "description": "First Project at AfterHours rebuilding components of ___ web app.",
        "phases": [],
        "company": 0,
        "complete": false,
        "status": false,
        "lastupdated": "2020-05-29"
    }
### Phases
    {
        "id": 5,
        "name": "Integration",
        "description": "Engineering testing",
        "start": "2020-04-29",
        "end": "2020-04-29",
        "people": null,
        "project": 0,
        "active": false,
        "complete": false
    }

## Getting Started

*In Progress*

### Prerequisites

*In Progress*

### Installing

In the process of finishing design - will be updated once completed.

## Running the tests

*Plan is to utilize Jest and React Testing Library for Testing*

### Break down into end to end tests

In the process of finishing design - will be updated once completed.

## Deployment

In the process of finishing design - will be updated once completed.

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - The web framework used
* [reactstrap](https://reactstrap.github.io/) - Styling

## Authors

* **Sammy Dowds** - *Initial work* - [Profile](https://github.com/sammydowds)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspiration = creating a simple web app which holds basic project data and is easily accessible, built on a modern framework.
