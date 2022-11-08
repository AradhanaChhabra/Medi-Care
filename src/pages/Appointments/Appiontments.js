import React,{ useState,useEffect } from 'react'
import { SidebarMain } from '../../Components/SidebarMain/SidebarMain'
import { BsDot } from 'react-icons/bs'
import { Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const Appiontments = () => {

    const [appointments,setAppointments] = useState([])
    const [appointment,setAppointment] = useState({
        date:"",
        doctorName:"",
        regarding:""
    })

   

    const submitHandler = (e,appointment)=>{
        e.preventDefault()
        var arr = []
        if(appointments.length)
        {
            setAppointments(apps=>{
                return [...apps,appointment]
            })
        } else {
            arr.push(appointment)
            setAppointments(arr)
        } 
        setAppointment({
            date:"",
            doctorName:"",
            regarding:""
        })
      
    }

    const inputHandler = (value,type)=>{
        if(value)
        {
            setAppointment((app)=>{
                app[type]=value
                return app
            })
        }
    }

    console.log(appointments)

    return (
        <>
            <SidebarMain/>
            <div className="graphicalContainer">
            <h2>Appointments</h2>
            <hr/>

            <div className="graphicalCard">
                <h2><BsDot/>Add an appointment here</h2>
                <div className="graphicalInput">
                <Form style={{display:"flex", justifyContent:"space-between", flexDirection:"column" }}>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text"
                 placeholder="Enter Value" 
                 ref="text"
                 onChange={(e)=>inputHandler(e.target.value,"regarding")}
                 size="lg" 
                 style={{width:'50%'}} />             
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text"
                 placeholder="Enter Value" 
                 ref="text"
                 onChange={(e)=>inputHandler(e.target.value,"doctorName")}
                 size="lg"
                 style={{width:'50%'}} />             
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="date" size="lg" style={{width:'50%'}}
                onChange={(e)=>inputHandler(e.target.value,"date")}
                ref="text"
                />             
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="submit"
                 size="lg" 
                 style={{backgroundColor:'rgba(255, 99, 132, 1)', width:"50%"}}
                 onClick={(e)=>submitHandler(e,appointment)}
                 />             
                </Form.Group>
                </Form>
                </div>
            </div>
                <br/><br/>

                {appointments.length?(
                 <div className="graphicalCard">
                 <h2><BsDot/>Upcoming appointments</h2>           
                 <Table striped bordered hover>
           <thead>
             <tr>
               <th>#</th>
               <th>Regarding</th>
               <th>Doctor's Name</th>
               <th>Date</th>
             </tr>
           </thead>
           <tbody>
             {appointments ? appointments.map(((app,idx)=>{
                 return (
                     <tr>
                     <td>{idx+1}</td>
                     <td>{app.regarding}</td>
                     <td>{app.doctorName}</td>
                     <td>{app.date}</td>
                   </tr>
                 )
             })):<></>}
           </tbody>
         </Table>
         </div>
                ):<>
                <h2>No upcoming appointments</h2>   
                </>}    
            </div>

        </>
    )
}

export default Appiontments
