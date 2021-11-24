import React,{ useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './graphicalData.css'
import { BsDot } from 'react-icons/bs'
import { FormControl, Form } from 'react-bootstrap';
import Graph from './graphs';
import { SidebarMain } from '../../Components/SidebarMain/SidebarMain'

const GraphicalData = ()=>{

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className="graphicalData" 
        style={{position:'relative', top:'80px'}}
        >
        <SidebarMain/>
        <div className="graphicalContainer">
        <h2>Record your health stats!</h2>
        <hr/>
        <div>
            <div className="graphicalCard">
                <h2><BsDot/> Hypertension</h2>
                <div className="graphicalInput">
                <Form style={{display:"flex", justifyContent:"space-between"}}>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Value" size="lg" style={{width:'120%'}} />             
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="date" size="lg" />             
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="submit" size="lg" style={{backgroundColor:'rgba(255, 99, 132, 1)'}} />             
                </Form.Group>
                </Form>
                </div>
                <Graph/>
            </div>
            <div className="graphicalCard">
                <h2><BsDot/> Hypertension</h2>
                <div className="graphicalInput">
                <Form style={{display:"flex", justifyContent:"space-between"}}>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Value" size="lg" style={{width:'120%'}} />             
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="date" size="lg" />             
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="submit" size="lg" style={{backgroundColor:'rgba(255, 99, 132, 1)'}} />             
                </Form.Group>
                </Form>
                </div>
                <Graph/>
            </div>
            <div className="graphicalCard">
                <h2><BsDot/> Hypertension</h2>
                <div className="graphicalInput">
                <Form style={{display:"flex", justifyContent:"space-between"}}>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Value" size="lg" style={{width:'120%'}} />             
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="date" size="lg" />             
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="submit" size="lg" style={{backgroundColor:'rgba(255, 99, 132, 1)'}} />             
                </Form.Group>
                </Form>
                </div>
                <Graph/>
            </div>
        </div>
        </div>
        </div>
    )

}

export default GraphicalData;
