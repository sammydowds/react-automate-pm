import React from 'react'; 
import { shallow } from 'enzyme';
import Header from '../components/HeaderComponent';
import ProjectDetails from '../components/sub/ProjectDetailsComponent'; 
import Home from '../components/HomeComponent'; 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const state_empty = {
    projects: {
        isLoading: false,
        errMess: false,
        projects: []
    }, 
    phases: {
        isLoading: false,
        errMess: false,
        phases: []
    }, 
    log: {
        isLoading: false,
        errMess: false, 
        log: []
    }, 
    userinterface: {
        projectDetails: {
            open: false, 
            projectId: null
        }, 
        phaseUpdateModal: {
        open: false, 
        phaseId: null
        },
        projectUpdateModal: {
        open: false, 
        projectId: null
        }, 
        projectCreateModal: {
        open: false 
        }, 
        phaseCreateModal: {
        open: false 
        },
        deleteModal: {
        open: false
        }
    },
    user: {
        isLoading: false, 
        errMess: false,
        user: {
            authenticated: false, 
            username: null, 
            token: null, 
            loggedout: true, 
            accountcreated: false, 
            firstname: null
        }
        
    }
}

const state_small = {
    projects: {
        isLoading: false,
        errMess: false,
        projects: {
            26: {
                complete: false, 
                id: 26, 
                lastupdated: "2020-06-30T18:23:01.553000Z", 
                name: "Django REST API - Projectile", 
                owner: 71
            }
        }
    }, 
    phases: {
        isLoading: false,
        errMess: false,
        phases: {
            42: {
                active: true, 
                complete: false, 
                end: "2020-06-29", 
                id: 42, 
                lastupdated: "2020-06-30T20:22:57.072000Z", 
                name: "Engineering", 
                projectId: 26, 
                start: "2020-06-28"
            }
        }
    }, 
    log: {
        isLoading: false,
        errMess: false, 
        log: []
    }, 
    userinterface: {
        projectDetails: {
            open: true, 
            projectId: 26
        }, 
        phaseUpdateModal: {
        open: false, 
        phaseId: null
        },
        projectUpdateModal: {
        open: false, 
        projectId: null
        }, 
        projectCreateModal: {
        open: false 
        }, 
        phaseCreateModal: {
        open: false 
        },
        deleteModal: {
        open: false
        }
    },
    user: {
        isLoading: false, 
        errMess: false,
        user: {
            authenticated: false, 
            username: null, 
            token: null, 
            loggedout: true, 
            accountcreated: false, 
            firstname: null
        }
        
    }
}

describe('<Home />', () => {
    it('renders a <Header /> components', () => {
      const wrapper = shallow(
            <Home 
                projects={state_empty.projects.projects} 
                log={state_empty.log.log} 
                projectDetails={state_empty.userinterface.projectDetails}
                user={state_empty.user}
            />
        );
      expect(wrapper.find(Header));
    });

    it('renders a <ProjectDetails /> components', () => {
        const wrapper = shallow(
              <Home 
                  projects={Object.values(state_small.projects.projects)} 
                  phases={Object.values(state_small.phases.phases)}
                  log={state_small.log.log} 
                  projectDetails={state_small.userinterface.projectDetails}
                  user={state_small.user}
              />
          );
        expect(wrapper.find(ProjectDetails));
      });
  });