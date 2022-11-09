import React,{useState} from 'react'
import { FirstBg, FirstContainer, VideoBg ,PageContent,PageH1,PageP,BtnWrapper,ArrowForward,ArrowRight,ButtonF} from './FirstPageElements'
import Video from '../../assets/video2.mp4'
// import { Button } from '../../ui/Button'

export const FirstPage = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(prev => { return !prev });
    }
    return (
        <FirstContainer id="home">
            <FirstBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </FirstBg>
            <PageContent>
                <PageH1>MediCare</PageH1>
                <PageP>
                    Aradhana Chhabra and Yashasavee Kesarwani
                </PageP>
                <PageP>The Others</PageP>
                <BtnWrapper>
                    <ButtonF
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        Get Started {hover?<ArrowForward/>:<ArrowRight/>}
                    </ButtonF>
                </BtnWrapper>
            </PageContent>
        </FirstContainer>
    )
}
