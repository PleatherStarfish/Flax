import Draggable from "react-draggable";
import uniqid from "uniqid";
import React from "react";
import randomColor from 'randomcolor';

let oscillator = (dragHandlers) => {
    const color = randomColor({luminosity: 'light'});
    return (<Draggable bounds="parent" {...dragHandlers} grid={[25, 25]}>
    <div id={uniqid()} className="oscillator-box" style={{backgroundColor: color, borderColor: color}}>
        <h1 className="cursor">Oscillator</h1>
        <hr style={{color: '#000000'}}/>
        <div className={"inputs"}>
            <h2>Input</h2>
            <div className={"input-jacks d-flex flex-column"}>
                <div className="p-2">
                    <h3>Waveform</h3>
                    <div className={"input-jacks"}></div>
                </div>
                <div className="p-2">
                    <h3>Frequency</h3>
                </div>
            </div>
        </div>
        <div className={"outputs"}>
            <h2>Output</h2>
            <div className={"output-jacks d-flex flex-column"}>
                <div className="p-2">
                    <h3>Audio Out</h3>
                </div>
            </div>
        </div>
    </div>
</Draggable>)};

export default oscillator;