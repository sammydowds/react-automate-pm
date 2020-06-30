## Automating Project Management - React App (Front End)

A simple tool for managing projects. The core problem being solve is tracking and viewing projects through an online platform. However, a design goal of the project was to keep the UI clean and easy to understand. 

This is a follow up project to a previous version completed in Django. This React app is designed to separate the front end as its own app, which will ideally be integrated with a Django REST API as the second part of the project. 

Live Demo of Version 1: https://sammydowds.github.io/react-automate-pm/

Currently, development of Version 2 is in process. 

V1 Home Page: 
![Image of Design](https://github.com/sammydowds/react-automate-pm/blob/master/public/assets/images/Sample_Screen.png)

V2 Home Page: 
![Image of Design V2](https://github.com/sammydowds/react-automate-pm/blob/master/public/assets/images/V2_Projectile_Home)
![Image of Design V2] (https://github.com/sammydowds/react-automate-pm/blob/master/public/assets/images/V2_Projectile_Projectlist.png)

## Data Structure 
### Projects
    {
        "id": 0,
        "name": "Custom Web App: Fortune 100",
        "company": 0,
        "complete": false,
        "lastupdated": "2020-05-29"
    }
### Phases
    {
        "id": 5,
        "name": "Integration",
        "start": "2020-04-29",
        "end": "2020-04-29",
        "people": null,
        "projectId": 0,
        "active": false,
        "complete": false
    }

### Log
    {
        "id": 0,
        "description": "Something was delayed by 1 day.",
        "notes": "Personal note", 
        "projectId": 0,
        "timestamp": "2020-06-06"
    }

## File Structure 

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
