import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'
import { FirstPage } from '../Components/FirstLandingPage/FirstPage';
import { InfoIndex } from '../Components/InfoSection/InfoIndex';
import { homeObjOne } from '../Components/InfoSection/Data';
import svg1 from '../assets/svg5.svg';

export const First = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <FirstPage />
            <InfoIndex {...homeObjOne} img={svg1}/>
        </>
    )
}
