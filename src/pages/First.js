import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'

export const First = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
        </>
    )
}
