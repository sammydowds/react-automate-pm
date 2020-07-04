
<p align="center">
  <img src="https://github.com/sammydowds/react-automate-pm/blob/master/public/assets/images/main_demo.png" />
</p>

![projectile tests](https://github.com/sammydowds/react-automate-pm/workflows/projectile%20tests/badge.svg?branch=master)
![projectile build](https://github.com/sammydowds/react-automate-pm/workflows/projectile%20build/badge.svg?branch=master)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/sammydowds/react-automate-pm.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/sammydowds/react-automate-pm/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/sammydowds/react-automate-pm.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/sammydowds/react-automate-pm/alerts/)


Table of Contents
======================

* [What is Projectile?](#what-is-projectile)
* [Data Structures](#data-structure)
* [File Structure](#file-structure)
* [Running Tests](#running-tests)
* [Licensing](#license)

## What is Projectile? 

A UI to manage and track your projects. Changes are logged (with automated notes), dates are shown relative to today, and information is structured in a single page web app. 

Data is consumed from [Ground Control](https://github.com/sammydowds/django-rest-automate-pm) - a REST API I have developed to pool project data. 

This is a follow up project to a previous version completed in Django. This React app is designed to separate the front end as its own app, which will ideally be integrated with a Django REST API as the second part of the project. 

Live Demo of Version 1: https://sammydowds.github.io/react-automate-pm/

#### Currently, development of Version 2 is in process. 

#### V2 Home Page: 
![Image of Design V2](https://github.com/sammydowds/react-automate-pm/blob/master/public/assets/images/V2_Projectile_Home.png)

## Data Structure 
    Projects
    {
        "id": 0,
        "name": "Custom Web App: Fortune 100",
        "company": 0,
        "complete": false,
        "lastupdated": "2020-05-29"
    }
    
    Phases
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

    Log
    {
        "id": 0,
        "description": "Something was delayed by 1 day.",
        "notes": "Personal note", 
        "projectId": 0,
        "timestamp": "2020-06-06"
    }

## File Structure 
    .
    ├── components
    │   ├── forms
    │   │   ├── CreatePhaseModalComponent.js
    │   │   ├── CreateProjectModalComponent.js
    │   │   ├── UpdatePhaseFormComponent.js
    │   │   └── UpdateProjectFormComponent.js
    │   ├── sub                                 #Directory of sub components for Home   
    │   │   ├── CompletedProjectsComponent.js           
    │   │   ├── DashboardComponent.js
    │   │   ├── LeftMenuComponent.js
    │   │   ├── LoadingComponent.js
    │   │   ├── PhasesEndingSoonComponent.js
    │   │   ├── ProjectDetailsComponent.js
    │   │   ├── ProjectGridComponent.js
    │   │   ├── ProjectWorkInProgressComponent.js
    │   │   └── RecentChangesComponent.js
    │   ├── HeaderComponent.js                          
    │   ├── HomeComponent.js                    #Home = Main Presentational Component
    │   ├── LandingComponent.js                       
    │   ├── LoginComponent.js
    │   ├── MainComponent.js                    #Main = Container component for the App 
    │   └── SignupComponent.js
    ├── redux
    │   ├── ActionCreators.js                   #fetches & dispatch for Redux store  
    │   ├── ActionTypes.js
    │   ├── companies.js
    │   ├── configureStore.js
    │   ├── log.js
    │   ├── phases.js
    │   ├── projects.js
    │   ├── ui.js
    │   └── user.js
    │   
    ├── shared
    │   ├── baseUrl.js                          #REST API base URLS/Endpoints stored here
    │   ├── default.svg
    │   ├── phases.js
    │   └── projects.js
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js 

## Running the tests

npm test 

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - The web framework used
* [Redux](https://redux.js.org/) - state management (M)
* [reactstrap](https://reactstrap.github.io/) - Styling

## Authors

* **Sammy Dowds** - *Initial work* - [Profile](https://github.com/sammydowds)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspiration = creating a simple web app which holds basic project data and is easily accessible, built on a modern framework.
