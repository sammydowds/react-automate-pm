import React from 'react'; 
import { shallow, mount } from 'enzyme';
import CompletedProjects from '../components/sub/CompletedProjectsComponent'; 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { state_empty, state_small } from '../testing_data/api_data'; 

Enzyme.configure({ adapter: new Adapter() });

describe('testing <RecentChanges /> with varying sizes of props', () => {
    it('renders row of none when no log entries', () => {
      const wrapper = shallow(
            <CompletedProjects  
                projects={state_empty.projects.projects} 
                projectsLoading={state_empty.projects.projectsLoading} 
                phases={state_empty.phases.phases}
                phasesLoading={state_empty.phases.phasesLoading}
            />
        );
      console.log(wrapper.html()); 
      expect(wrapper.find('tr')).toHaveLength(0);
    });
    it('renders table when projects are present', () => {
        const wrapper = mount(
              <CompletedProjects  
                  projects={state_small.projects.projects} 
                  projectsLoading={state_small.projects.projectsLoading} 
                  phases={state_small.phases.phases}
                  phasesLoading={state_small.phases.phasesLoading}
              />
          );
        console.log(wrapper.text());
        console.log(state_small.projects.projects);  
        expect(wrapper.find(".projects"));
      });
  });