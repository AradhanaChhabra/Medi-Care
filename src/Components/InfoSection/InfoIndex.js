import React from 'react'
import { Button } from '../../ui/Button'
import {ImgWrap,InfoContainer,InfoWrapper,InfoRow,Column1,Column2,Heading,Subtitle,TopLine,TextWrapper,BtnWrap,Img} from './InfoElemenst'

export const InfoIndex = ({lightBg,id,imgStart,topLine,headline,lightText,darkText,description,buttonLabel,img,alt,primary,dark,dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button
                                        to="/appointments"
                                        // smooth={true}
                                        // duration={500}
                                        // spy={true}
                                        // exact="true"
                                        // offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2?1:0}
                                        >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        
        </>
    )
}
