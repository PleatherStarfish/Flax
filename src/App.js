import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap"
import oscillator from './components/oscillator'
import Draggable, {DraggableCore} from 'react-draggable';
import uniqid from 'uniqid';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [objectsInCanvas, setObjectsInCanvas] = useState([]);
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

    const dragHandlers = {onStart: onStart, onStop: onStop};

    const deleteObject = (e) => {
        e.preventDefault();
        const removeId = e.target.parentNode.id.replace('delete-','');
        console.log(objectsInCanvas[0]);
        setObjectsInCanvas(objectsInCanvas.filter(item => item.id !== removeId));
    };

    const creatObjectOnCanvas = (e, type) => {
        e.preventDefault();
        if (type === "oscillator") {
            setObjectsInCanvas(oldArray => [...oldArray, oscillator(dragHandlers, deleteObject)])
        }
    };

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
                            { objectsInCanvas }
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default App;
