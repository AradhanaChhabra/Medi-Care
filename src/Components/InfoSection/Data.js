export const homeObjAbout = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About us',
    headline: <div style={{fontSize:'39px'}}>Standardising the process of identification across healthcare providers</div>,
    description: 'This project lays emphasis on the importance of keeping medical/health records in one place to ease the access of using and providing this information to the required personnels. Also we are inspired by the scheme of the government of India of maintaining unique health IDs of individuals.',
    buttonLabel: 'Start Today',
    imgStart: false,
    alt: 'health personnels',
    dark: true,
    primary: true,
    darkText:false
}

export const homeObjGoals = {
    id: 'goals',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: '',
    headline: 'We focus on...',
    description: <>
        {/* style={{'list-style-type':'none'}} */}
        <span style={{display:"block",marginBottom:'20px'}}>Minimsing the burden of storing and carrying health records for every visit to the doctor.</span>
        <span style={{ display: "block", marginBottom: '20px' }}>Instant Access
            <span style={{ display: "block", marginBottom: '7px', marginLeft: '20px' }}>- to the patient’s case history</span>
            <span style={{ display: "block", marginBottom: '7px', marginLeft: '20px' }}> –the treatment undertaken</span>
            <span style={{ display: "block", marginBottom: '7px', marginLeft: '20px' }}>-where and with what outcomes</span>
            enabling more accurate diagnosis and treatment.</span>
        <span style={{display:"block",marginBottom:'20px'}}>Visualizing medical/health data by means of statistics and graph.</span></>
    ,
    buttonLabel: 'Learn More',
    imgStart: false,
    alt: 'golas data',
    dark: false,
    primary: false,
    darkText:true
}

export const homeObjSpecs = {
    id: 'specifications',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'App Specifications',
    headline: 'What we provide?',
    description: 'The above goals will be achieved with a web app integrated with the best possible UI and database and also we are trying to use a native app for easing the acc',
    buttonLabel: 'Get Started',
    imgStart: true,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText:false
}