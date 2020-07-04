import React from 'react'; 
import { shallow } from 'enzyme';
import Header from '../components/HeaderComponent';
import ProjectDetails from '../components/sub/ProjectDetailsComponent'; 
import Home from '../components/HomeComponent'; 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { state_empty, state_small, state_nophases } from '../testing_data/api_data'; 

Enzyme.configure({ adapter: new Adapter() });

describe('testing <Home /> with varying sizes of props', () => {
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

    it('renders a <ProjectDetails /> components without phases', () => {
    const wrapper = shallow(
            <Home 
                projects={Object.values(state_nophases.projects.projects)} 
                phases={Object.values(state_nophases.phases.phases)}
                log={state_nophases.log.log} 
                projectDetails={state_nophases.userinterface.projectDetails}
                user={state_nophases.user}
            />
        );
    expect(wrapper.find(ProjectDetails));
    });

  });