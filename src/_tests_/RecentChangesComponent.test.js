import React from 'react'; 
import { shallow, mount } from 'enzyme';
import { render } from '@testing-library/react';
import RecentChanges from '../components/sub/RecentChangesComponent'; 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { state_empty, state_medium, state_small } from '../testing_data/api_data'; 

Enzyme.configure({ adapter: new Adapter() });

describe('testing <RecentChanges /> with varying sizes of props', () => {
    it('renders row of none when no log entries', () => {
      const wrapper = shallow(
            <RecentChanges  
              projectsLoading={state_empty.projects.isLoading}
              projects={state_empty.projects.projects} 
              log={state_empty.log.log} 
              projectDetails={state_empty.userinterface.projectDetails}
              user={state_empty.user}
              phases={state_empty.phases}
            />
        );
      console.log(wrapper.html()); 
      expect(wrapper.find('td').text()).toContain('None');
    });

    it('renders 1 row of tr for log entries', () => {
      const wrapper = mount(
            <RecentChanges  
              projectsLoading={state_small.projects.isLoading}
              projects={state_small.projects.projects} 
              log={state_small.log.log} 
              projectDetails={state_small.userinterface.projectDetails}
              user={state_small.user}
              phases={state_small.phases}
            />
        );
      console.log(wrapper.html()); 
      expect(wrapper.find('span.project-link'));
    });
  });