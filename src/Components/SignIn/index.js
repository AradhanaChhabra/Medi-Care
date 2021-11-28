import React from 'react'
import { useState } from 'react';
import Register from './Register';
import Login from './Login';
import './style.scss'

export default function SignIn(prop) {

    const [isLogin, setIsLogin] = useState(true);
    const [rightsideCLass, setrightsideCLass] = useState(`right-side right`);
    const current = isLogin ? "Register" : "Login";
    const currentActive = isLogin ? "login" : "register";

  const changeState = () => {
    if (isLogin) {
      setrightsideCLass(`right-side left`);
    }
    else {
      setrightsideCLass(`right-side right`);
    }
    setIsLogin(prevState => !prevState);
  }
  // console.log(isLogin);
    return (
        <div className="wrapper">
            <div className="login">
        <div className="container">
        {/* <h3 className="heading">HACK YOUR EXPENSES !</h3> */}
          {isLogin && <Login loginHandler={prop.loginHandler}></Login>}
            {!isLogin && <Register loginHandler={prop.loginHandler}/>}
        </div>
        <RightSide
          class={rightsideCLass}
          current={current}
            currentActive={currentActive}
            onClick={changeState}
          />
      </div>
      </div>
    )
}

const RightSide = props => {
    return (
      <div
        className={props.class}
        onClick={props.onClick}
      >
        <div className="inner-container">
          <div className="text">{props.current}</div>
        </div>
      </div>
    );
  };
