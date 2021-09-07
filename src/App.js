import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useCallback} from "react";
import {Container, Row, Col, Button} from "react-bootstrap"
import Oscillator from './components/oscillator'
import uniqid from 'uniqid';
import 'bootstrap/dist/css/bootstrap.min.css';
import randomColor from 'randomcolor';
import updateObjectLocation from './lib/updateObjectLocation.js'
import updateDragging from './lib/updateDragging.js'

function App() {
    const [objectsInCanvas, setObjectsInCanvas] = useState(new Map());
    const [deltaPositionX, setDeltaPositionX] = useState(null);
    const [deltaPositionY, setDeltaPositionY] = useState(null);
    const [activeDrags, setActiveDrags] = useState(0);
    const [activePatchCordOnMouse, setActiveactivePatchCordOnMouse] = useState(null);
    const [state, setState] = useState({isDragging: false});
    const [deltaPosition, setDeltaPosition] = useState({x: 0, y: 0});

    const onDrag = useCallback((e, ui) => {
        if (state) {
            const objectId = e.target.id;
        }
        // updateObjectLocation(objectsInCanvas, objectId, "deltaPosition", ui)
        // setObjectsInCanvas(updateObjectLocation(objectsInCanvas, objectId, "deltaPosition", ui));
    }, [state]);

    const handleDrag = (e, ui) => {
        setDeltaPosition((prevState) => ({
            x: prevState.x + ui.deltaX,
            y: prevState.y + ui.deltaY,
        }));
    };


    const onStart = useCallback(() => {
        setState(prevState => ({
            ...prevState,
            isDragging: true
        }));
    }, []);

    const onStop = useCallback(() => {
        setState(prevState => ({
            ...prevState,
            isDragging: false
        }));
    }, []);

    const dragHandlers = {onStart: onStart, onStop: onStop};

    const deleteObject = (e) => {
        e.preventDefault();
        // const removeId = e.target.parentNode.id.replace('delete-','');
        // const newItemsInCanvas = new Map([...objectsInCanvas].filter(([key]) => key !== removeId));
        // setObjectsInCanvas(newItemsInCanvas);
    };

    const handleJackClick = (e, id) => {
        e.preventDefault();
        setActiveactivePatchCordOnMouse(e.target.id)
    };

    const creatObjectOnCanvas = useCallback((e, type) => {
        const oscId = uniqid();
        const objectColor = randomColor({luminosity: 'light'});
        const newOscillator = new Map();
        newOscillator.set(oscId, {
            "color": objectColor,
            "dom_node": <Oscillator handleDrag={handleDrag} dragHandlers={dragHandlers} deleteObject={deleteObject} handleJackClick={handleJackClick} key={oscId} keyId={oscId} color={objectColor}/>,
            "z-index": 0,
            "deltaPosition": {x: 0, y: 0},
            "isDragging": false,
        });

        if (type === "oscillator") {
            setObjectsInCanvas(new Map([...objectsInCanvas, ...newOscillator]));
        }
    }, []);

    useEffect(() => console.log(deltaPosition.x.toFixed(0), deltaPosition.y.toFixed(0)), [deltaPosition]);

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
                            { [...objectsInCanvas.keys()].map(key => (
                                objectsInCanvas.get(key)["dom_node"]
                            )) }
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default App;
