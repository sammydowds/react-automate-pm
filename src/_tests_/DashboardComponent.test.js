import React from 'react'; 
import { render } from 'enzyme';
import { DashboardComponent, StatisticsProjects } from '../components/sub/DashboardComponent'; 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { state_small } from '../testing_data/api_data'; 

Enzyme.configure({ adapter: new Adapter() });

describe('Checking dashboard stats', () => {
    it('Rendering project number correctly with small amount of phases/projects', () => {
        const open_projs = state_small.projects.projects.filter((project) => project.complete === false); 
        console.log(open_projs); 
        const wrapper = render(
              <StatisticsProjects 
                  projects={open_projs} 
                  phases={state_small.phases.phases.filter((phase) => phase.complete === false)}
              />
        ); 
        console.log(wrapper.text()); 
        console.log(wrapper.find('#projcount').text()); 
        expect(wrapper.find('#projcount').text()).toMatch('1');
      });
  });