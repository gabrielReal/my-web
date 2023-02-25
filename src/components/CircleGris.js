
import { useState, useEffect } from "react";
// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "./ProgressProvider";

import React from 'react'

export const CircleGris = () => {
    const [valueEnd, setValueEnd] = useState(0);

    useEffect(() => {
        setValueEnd(0)
    }, []);

  return (
    <div className="wrapper-circle">
        <ProgressProvider valueStart={0} valueEnd={valueEnd}>
          {value => <CircularProgressbar 
            value={value} 
            text={`${value}%`}
            styles={buildStyles({
              
              pathTransitionDuration: 0,
          
              // Colors
              stroke: '#706F6F',
              pathColor: `#706F6F ${value / 100}`,
              textColor: '#706F6F',
              trailColor: '#706F6F',
              backgroundColor: '#706F6F'
            })} />}
        </ProgressProvider>
    </div>
  );
};

