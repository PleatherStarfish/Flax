import Draggable from "react-draggable";
import uniqid from "uniqid";
import React, {useState} from "react";

let Oscillator = (props) => {
    return (<Draggable bounds="parent" {...props.dragHandlers} grid={[25, 25]} style={{position: "relative"}}>
    <div id={props.keyId} className="oscillator-box" style={{backgroundColor: props.color, borderColor: props.color, cursor: "grab", position: "relative"}}>
        <div id={`container-${props.keyId}`} className={"d-flex justify-content-between"}>
            <h1 style={{color: "grey"}}>Oscillator</h1>
            <div id={`delete-${props.keyId}`} onClick={(e) => props.deleteObject(e)} style={{cursor: "pointer"}}>
                <svg id={`delete-${props.keyId}`} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x"
                     viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </div>
        <div className={"inputs"}>
            <h2 className={"sr-only"}>Input</h2>
            <div className={"input-jacks-parent d-flex flex-column"}>
                <div className="p-2">
                    <div className={"input-jacks d-flex justify-content-around"}>
                        <div id={`input-${props.keyId}-fm`} className="jack" />
                    </div>
                </div>
            </div>
        </div>
        <div className={"outputs"}>
            <h2 className={"sr-only"}>Output</h2>
            <div className={"output-jacks-parent d-flex flex-column"}>
                <div className="p-2">
                    <div className={"output-jacks d-flex justify-content-around flex-wrap"}>
                        <div id={`${props.keyId}-output-audio_out`} className="jack" onClick={(e) => props.handleJackClick(e, `${props.keyId}-output-audio_out`)} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</Draggable>)};

export default Oscillator;