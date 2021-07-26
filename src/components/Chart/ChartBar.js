import React from 'react';
import "./ChartBar.css";

const ChartBar = (props) => {

    let barFilledHeight = '0%';

    if(props.maxValue > 0){ // If the givenData Points we have a max Value greater than Zero
        barFilledHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                {/* Now setting style of a Element Dynamically ,,, So in REACT style attribute expects an Object as a Value*/}
                <div className="chart-bar__fill" style={{height: barFilledHeight}} ></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
};

export default ChartBar;