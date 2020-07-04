import React from 'react'; 
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Header from '../components/HeaderComponent';
import RecentChanges from '../components/sub/RecentChangesComponent'; 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { state_empty, logid_nomatch } from '../testing_data/api_data'; 

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
    test('renders a table with no entries when no projects match log projectId', () => {
      const { getByText } = render(
            <RecentChanges 
                projectsLoading={logid_nomatch.projects.isLoading}
                projects={logid_nomatch.projects.projects} 
                log={logid_nomatch.log.log} 
                projectDetails={logid_nomatch.userinterface.projectDetails}
                user={logid_nomatch.user}
                phases={logid_nomatch.phases}
            />
        );
      const nullTableLog = getByText('No log entries tied to your projects.'); 
      expect(nullTableLog).toBeInTheDocument();
    });

  });