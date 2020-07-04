import React from 'react'; 
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import RecentChanges from '../components/sub/RecentChangesComponent'; 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { state_empty, logid_nomatch, state_small } from '../testing_data/api_data'; 

Enzyme.configure({ adapter: new Adapter() });

describe('testing <RecentChanges /> with varying sizes of props', () => {
    test('renders an empty table with text none when there are no log entries', () => {
      const { getByText } = render(
            <RecentChanges 
                projects={state_empty.projects.projects} 
                log={state_empty.log.log} 
                projectDetails={state_empty.userinterface.projectDetails}
                user={state_empty.user}
                phases={state_empty.phases}
            />
        );
      const nullTableLog = getByText('None'); 
      expect(nullTableLog).toBeInTheDocument();
    });

    it('renders multiple row of tr for amount of log entries', () => {
      const wrapper = shallow(
            <RecentChanges  
              projectsLoading={state_small.projects.isLoading}
              projects={state_small.projects.projects} 
              log={state_small.log.log} 
              projectDetails={state_small.userinterface.projectDetails}
              user={state_small.user}
              phases={state_small.phases}
            />
        );
      expect(wrapper.find('tr')).toHaveLength(1);
    });


  });