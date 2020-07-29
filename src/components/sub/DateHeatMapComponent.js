import React from 'react'; 
import HeatMap from './HeatMapComponent'; 
import { Loading } from './LoadingComponent'; 
import moment from 'moment'; 

function heatmapProccessing(projects, phases, target) {
    let index = []; 
    // finding furthest date away from today, setting to 1 initially to prevent 0 from filling in 
    let furthest = 1; 
    for (let phase of phases) {
        let target_day = moment(phase[target]); 
        let proj_name = 'Enter Project Name...';  
        let days_away = target_day.diff(moment(), 'days');
        if (furthest < days_away)  {
        furthest = days_away; 
        }
        let id_square = phase.id + target; 
        index.push({'id': id_square, 'top': phase.name, 'display': days_away, 'right': 'days', 'left': target, 'bottom': proj_name}); 
    }
    // normalizing data from longest duration to 10 
    for (let index_phase of index) {
        let diff_largest = furthest-index_phase.display; 
        if (diff_largest > furthest) {
        diff_largest = furthest; 
        }
        let heat = ((diff_largest)/furthest) * 8; 
        index_phase['index'] = heat; 
    }
    return index; 
}

function renderHeatMap(projects, phases, target, color) {
    if (phases) {
        if (phases.length > 0) {
        // preprocessing data to get index values for heatmap component (normalizing)
        let index = heatmapProccessing(projects, phases, target);
        return(
            <HeatMap index={index} color={color} />
        )
        } else {
        return(
            <div>No Active Phases</div>
        )
        }
    } else {
        return(
        <div>No Phases to Show</div>
        ); 
    }
}


function DateHeatMap(props) {
    if (props.phasesLoading && props.projectsLoading) {
        return(
            <Loading />
        ); 
    } else {
        let next_phases = props.phases.filter((phase) => moment(phase[props.target]) < moment().add(14, 'days') && moment(phase[props.target]) >= moment()); 
        let map = renderHeatMap(props.projects, next_phases, props.target, props.color); 
        return(
            <div className="text-center">
                <h4>{props.headline}</h4>
                <p className="d-inline-block">
                    {map}
                </p>
            </div>
        ); 
    }
}

export default DateHeatMap; 