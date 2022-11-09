import React,{ useState } from 'react';
import './graphicalData.css'
import { BsDot } from 'react-icons/bs'
import { Form } from 'react-bootstrap';
import Graph from './graphs';
import { SidebarMain } from '../../Components/SidebarMain/SidebarMain'

const GraphicalData = ()=>{

    const [stats,setStats] = useState([])
    const [stat,setStat] = useState({
        date:"",
        upper:"",
        lower:""
    })  

    const submitHandler = (e,stat)=>{
        e.preventDefault()
        var arr = []
        if(stats.length)
        {
            setStats(apps=>{
                return [...apps,stat]
            })
        } else {
            arr.push(stat)
            setStats(arr)
        } 
        setStat({
            date:"",
            upper:"",
            lower:""
        })
      
    }

    const inputHandler = (value,type)=>{
        if(value)
        {
            setStat((app)=>{
                app[type]=value
                return app
            })
        }
    }
    return (
        <>
        <SidebarMain/>
        {/* <div className="graphicalData" 
        style={{height:"100vh"}}> */}
        
        <div className="graphicalContainer">
        <h2>Record your health stats!</h2>
        <hr/>
        <div>
            <div className="graphicalCard">
                <h2><BsDot/> Hypertension</h2>
                 <div className="graphicalInput">
                <Form style={{display:"flex", justifyContent:"space-between", flexDirection:"column" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text"
                 placeholder="Upper Value" 
                 onChange={(e)=>inputHandler(e.target.value,"upper")}
                 size="lg" 
                 style={{width:'50%'}} />             
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text"
                 placeholder="Lower Value"                  
                 onChange={(e)=>inputHandler(e.target.value,"lower")}
                 size="lg"
                 style={{width:'50%'}} />             
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="date" size="lg" style={{width:'50%'}}
                onChange={(e)=>inputHandler(e.target.value,"date")}    
                />             
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="submit"
                 size="lg" 
                 style={{backgroundColor:'rgba(255, 99, 132, 1)', width:"50%"}}
                 onClick={(e)=>submitHandler(e,stat)}
                 />             
                </Form.Group>
                </Form>
                </div>
                <Graph stats={stats}/>
            </div>
        </div>
        </div>
        {/* </div> */}
        </>
    )

}

export default GraphicalData;
