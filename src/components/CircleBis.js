
import { useState, useEffect } from "react";
// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "./ProgressProvider";

import React from 'react'

export const CircleBis = () => {
    const [valueEnd, setValueEnd] = useState(0);

    useEffect(() => {
        setValueEnd(100)
    }, []);

  return (
    <div className="wrapper-circle">
        <ProgressProvider valueStart={0} valueEnd={valueEnd}>
          {value => <CircularProgressbar 
            value={value} 
            text={`${value}%`}
            styles={buildStyles({
              /* Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,
          
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
          
              // Text size
              textSize: '16px',*/
          
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 3,
          
              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',
          
              // Colors
              stroke: '#706F6F',
              pathColor: `#706F6F ${value / 100}`,
              textColor: '#D60026',
              trailColor: '#706F6F',
              backgroundColor: '#706F6F'
            })} />}
        </ProgressProvider>
    </div>
  );
};

/*

function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <hr style={{ border: "2px solid #ddd" }} />
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: 100 }}>{props.children}</div>
        <div style={{ marginLeft: 30 }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}*/