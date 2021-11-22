import React from 'react'
import img from '../../assets/svg1.svg'
import "./style.scss"
import useInputValidation from '../../hooks/useInputValidation';
 import * as firebase from 'firebase'
// import { useDispatch } from 'react-redux';
// import { authenticate,userid,username } from '../../Actions/Actions';

export default function Login(props) {

    // const dispatch = useDispatch();

    const {
        value: emailInput,
        isValueValid: isEmailValid,
        toShowError: emailInputError,
        valueChangeHandler: emailChangeHandler,
        onBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInputValidation(value => value.trim() !== "" && value.includes('@'));

    const {
        value: passwordInput,
        isValueValid: isPasswordValid,
        toShowError: passwordInputError,
        valueChangeHandler: passwordChangeHandler,
        onBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = useInputValidation(value => value.trim().length > 6);
    
    const loginHandler = (event) => {
        event.preventDefault();

        if (isEmailValid && isPasswordValid) {
             firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput)
            .then((userCredential) => {
        //     // Signed in
        //     console.log(userCredential)
        //     dispatch(authenticate())
        //     dispatch(userid(userCredential.uid))
        //     dispatch(username(userCredential.uid))
        //     // ...
         })
         .catch((error) => {
            console.log(error)
         });
            console.log("VALID");
        }
        else console.log("INVALID")

        resetEmailInput();
        resetPasswordInput();
    }

    return (
        <div className="base-container" ref={props.containerRef}>
            {/* <h3>HACK YOUR EXPENSES!</h3><br/> */}
            <div className="header">
                LOGIN
            </div>
            <br/>
            <div className="content">
                <div className="image">
                    <img src={img} alt="login" height="200px" width ="200px"/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <input

                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={emailInput}
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                        />
                         {emailInputError&&<p className="error">Enter a valid email address</p>}

                    </div>
                    <div className="form-group">
                    <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={passwordInput}
                            onChange={passwordChangeHandler}
                            onBlur={passwordBlurHandler}
                        />
                        {passwordInputError&&<p className="error">Password too short. Try again</p>}
                    </div>
                </div>
            </div>
            <div className="footer">
                <button className="btn" type="sumbit" onClick={loginHandler}>Login</button>
            </div>
        </div>
    )
}