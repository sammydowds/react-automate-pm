import React from 'react';
import {
    UncontrolledPopover, 
    PopoverHeader, 
    PopoverBody
} from 'reactstrap'; 

function mapGrid(props) {
    let map = props.index.map((square) => {
        let style = {
            backgroundColor: `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]}, ${square.index/10})` 
        }
        let pop_id = `popover${square.id}`; 
        return (
            <div id={pop_id} className='grid-item' style={style}>
                <p className='grid-description align-middle'>
                    {square.top}
                    <br></br>
                    {square.left}&nbsp; 
                    <span className='grid-number'>
                        {square.display}
                    </span>
                    &nbsp;{square.right}
                    <br></br>
                    <span>
                        {square.bottom}
                    </span>
                </p>
                <UncontrolledPopover trigger="click" placement="top" target={pop_id}>
                    <PopoverHeader>{square.top}</PopoverHeader>
                    <PopoverBody>
                        <p className='grid-description align-middle'>
                            {square.left}&nbsp; 
                            <span className='grid-number'>
                                {square.display}
                            </span>
                            &nbsp;{square.right}
                            <br></br>
                            <span>
                                {square.bottom}
                            </span>
                        </p>
                    </PopoverBody>
                </UncontrolledPopover>
            </div>
        ); 
    });
    return map; 
}

function HeatMap(props) {
    let grid = mapGrid(props); 
    return (
        <div className='grid-container'>
            {grid}
        </div>
    ); 
}

export default HeatMap; 
