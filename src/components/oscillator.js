import Draggable from "react-draggable";
import uniqid from "uniqid";
import React from "react";
import randomColor from 'randomcolor';

let oscillator = (dragHandlers, deleteObject) => {
    const color = randomColor({luminosity: 'light'});
    const oscId = uniqid();
    return (<Draggable key={oscId} bounds="parent" {...dragHandlers} grid={[25, 25]}>
    <div id={oscId} className="oscillator-box" style={{backgroundColor: color, borderColor: color, cursor: "grab"}}>
        <div className={"d-flex justify-content-between"}>
            <h1 style={{color: "grey"}}>Oscillator</h1>
            <div id={`delete-${oscId}`} onClick={(e) => deleteObject(e)} style={{cursor: "pointer"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x"
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
                        <div className="jack" />
                    </div>
                </div>
            </div>
        </div>
        <div className={"outputs"}>
            <h2 className={"sr-only"}>Output</h2>
            <div className={"output-jacks-parent d-flex flex-column"}>
                <div className="p-2">
                    <div className={"output-jacks d-flex justify-content-around flex-wrap"}>
                        <div className="jack" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</Draggable>)};

export default oscillator;