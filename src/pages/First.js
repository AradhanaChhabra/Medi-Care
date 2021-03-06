import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'
import { FirstPage } from '../Components/FirstLandingPage/FirstPage';
import { InfoIndex } from '../Components/InfoSection/InfoIndex';
import { homeObjAbout, homeObjGoals, homeObjSpecs } from '../Components/InfoSection/Data';
import svg1 from '../assets/svg5.svg';
import svg2 from '../assets/svg7.svg';
import svg3 from '../assets/svg4.svg';
import { Services } from '../Components/Services/Services';
import Footer from '../Components/Footer/Footer';

const First = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <FirstPage />
            <InfoIndex {...homeObjAbout} img={svg1} />
            <Services/>
            <InfoIndex {...homeObjSpecs} img={svg2} />
            <InfoIndex {...homeObjGoals} img={svg3} />
            <Footer/>
        </>
    )
}

export default First;
