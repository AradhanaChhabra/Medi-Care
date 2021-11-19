export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About us',
    headline: <div style={{fontSize:'39px'}}>Standardising the process of identification across healthcare providers</div>,
    description: 'This project lays emphasis on the importance of keeping medical/health records in one place to ease the access of using and providing this information to the required personnels. Also we are inspired by the scheme of the government of India of maintaining unique health IDs of individuals.',
    buttonLabel: 'Get Started',
    imgStart: false,
    alt: 'health personnels',
    dark: true,
    primary: true,
    darkText:false
}

export const homeObjTwo = {
    id: 'goals',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: '',
    headline: 'We focus on...',
    description: <>
        {/* style={{'list-style-type':'none'}} */}
        <span style={{display:"block",marginBottom:'15px'}}>Keeping and maintaining logs of personal medical records.</span>
        <span style={{display:"block",marginBottom:'15px'}}>Making appointments with physicians, medical tests, vaccinations etc.</span>
        <span style={{display:"block",marginBottom:'15px'}}>Visualizing medical/health data by means of statistics and graph.</span></>
    ,
    buttonLabel: 'Learn More',
    imgStart: true,
    alt: 'golas data',
    dark: false,
    primary: false,
    darkText:true
}

export const homeObjThree = {
    id: 'specifications',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'App Specifications',
    headline: 'What we provide?',
    description: 'The above goals will be achieved with a web app integrated with the best possible UI and database and also we are trying to use a native app for easing the acc',
    buttonLabel: 'Get Started',
    imgStart: false,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText:false
}