import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

import {Container, Row, Col, Button} from "react-bootstrap"

import Draggable, { DraggableCore } from 'react-draggable';

import uniqid from 'uniqid';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [objectsInCanvas, setobjectsInCanvas] = useState(null);
  const [deltaPositionX, setDeltaPositionX] = useState(null);
    const [deltaPositionY, setDeltaPositionY] = useState(null);
  const [activeDrags, setActiveDrags] = useState(0);

    const onDrag = (e, ui) => {
        setDeltaPositionX(deltaPosX => deltaPosX + 1);
        setDeltaPositionY(deltaPosY => deltaPosY + 1);
    };

    const onStart = () => {
        setActiveDrags(prevCount => prevCount + 1);
    };

    const onStop = () => {
        setActiveDrags(prevCount => prevCount - 1);
    };

    const creatObjectOnCanvas = (e, type) => {
        e.preventDefault();
        console.log(type)
    };

    const dragHandlers = {onStart: onStart, onStop: onStop};

    return (
    <Container fluid style={{margin: "2vh 0"}}>
      <Row md={4} style={{height: "96vh"}}>
        <Col xs={2} className={"border-end"}>
            <div className="d-grid gap-2">
                <Button variant="outline-secondary" onClick={e => creatObjectOnCanvas(e, "oscillator")}>Create Oscillator</Button>
            </div>
        </Col>
        <Col xs={10}>
            <div className="canvas" style={{height: '100%', width: '100%', position: 'relative', overflow: 'auto', padding: '0'}}>
                <div style={{height: '100%', width: '100%', padding: '10px'}}>
                    <Draggable bounds="parent" {...dragHandlers} grid={[25, 25]}>
                        <div id={uniqid()} className="oscillator-box">
                            <h1 className="cursor">Oscillator</h1>
                            <hr  style={{ color: '#000000', backgroundColor: '#000000', height: .5, borderColor : '#000000' }}/>
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
                    </Draggable>
                </div>
            </div>

        </Col>
      </Row>
    </Container>
  );
}

export default App;
