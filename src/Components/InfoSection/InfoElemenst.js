import styled from "styled-components";

export const InfoContainer = styled.div`
    color:#F7F7F7;
    background: ${({ lightBg })=>(lightBg ? "#F4F9F9" : '#B9CCED')};
    
    @media screen and (max-width:768px){
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding:0 24px;
    justify-content:center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width:768px){
        grid-template-areas: ${({imgStart})=>(imgStart?`'col1' 'col2'`: `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area:col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area:col2;
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color:#929ab9;
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    `

export const Heading = styled.h1`
      margin-bottom: 24px;
      font-size: 39px;
      line-height: 1.1;
      font-weight: 600;
      color:${({ lightText }) => ( lightText ? '#f7f8fa' : '#8b91c1' )};
      
      @media screen and (max-width:480px){
        font-size: 30px;
    }
    `

export const Subtitle = styled.p`
    font-size:18px;
    max-width: 470px;
    margin-bottom: 35px;
    line-height: 24px;
    color:${({ darkText }) => (darkText ? '#8b91c1' : '#F7F7F7')};
`

export const BtnWrap = styled.div`
display:flex;
justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 500px;
    height: 100%;
`
export const Img = styled.img`
    width: 100%;
    margin:0 0 10px 0;
    padding-right: 0;
`