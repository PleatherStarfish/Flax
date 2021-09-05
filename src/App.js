import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap"
import Oscillator from './components/oscillator'
import Draggable, {DraggableCore} from 'react-draggable';
import uniqid from 'uniqid';
import 'bootstrap/dist/css/bootstrap.min.css';
import randomColor from 'randomcolor';

function App() {
    const [objectsInCanvas, setObjectsInCanvas] = useState(new Map());
    const [deltaPositionX, setDeltaPositionX] = useState(null);
    const [deltaPositionY, setDeltaPositionY] = useState(null);
    const [activeDrags, setActiveDrags] = useState(0);
    const [activePatchCordOnMouse, setActiveactivePatchCordOnMouse] = useState(null);

    const onDrag = (e, ui) => {
        setDeltaPositionX(deltaPosX => deltaPosX + 1);
        setDeltaPositionY(deltaPosY => deltaPosY + 1);
    };

    const onStart = (e) => {
        console.log(e.target.id);
        console.log(objectsInCanvas);
        setActiveDrags(prevCount => prevCount + 1);
    };

    const onStop = (e) => {
        setActiveDrags(prevCount => prevCount - 1);
    };

    const dragHandlers = {onStart: onStart, onStop: onStop};

    const deleteObject = (e) => {
        e.preventDefault();
        const removeId = e.target.parentNode.id.replace('delete-','');
        const newItemsInCanvas = new Map([...objectsInCanvas].filter(([k]) => k !== removeId));
        setObjectsInCanvas(newItemsInCanvas);
    };

    const handleJackClick = (e, id) => {
        e.preventDefault();
        setActiveactivePatchCordOnMouse(e.target.id)
    };

    const creatObjectOnCanvas = (e, type) => {
        const oscId = uniqid();
        const objectColor = randomColor({luminosity: 'light'});

        if (type === "oscillator") {
            setObjectsInCanvas(new Map(objectsInCanvas.set(oscId, {
                "color": objectColor,
                "dom_node": <Oscillator dragHandlers={dragHandlers} deleteObject={deleteObject} handleJackClick={handleJackClick} key={oscId} keyId={oscId} color={objectColor}/>,
                "z-index": 0,
            })));
        }
    };

    useEffect(() => console.log(objectsInCanvas.keys()), []);

    return (
        <Container fluid style={{margin: "2vh 0"}}>
            <Row md={4} style={{height: "96vh"}}>
                <Col xs={2} className={"border-end"}>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" onClick={e => creatObjectOnCanvas(e, "output")}>Create
                            Output</Button>
                        <Button variant="outline-secondary" onClick={e => creatObjectOnCanvas(e, "oscillator")}>Create
                            Oscillator</Button>
                    </div>
                </Col>
                <Col xs={10}>
                    <div className="canvas"
                         style={{height: '100%', width: '100%', position: 'relative', overflow: 'auto', padding: '0'}}>
                        <div style={{height: '100%', width: '100%', padding: '10px'}}>
                            { [...objectsInCanvas.keys()].map(k => (
                                objectsInCanvas.get(k)["dom_node"]
                            )) }
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default App;
