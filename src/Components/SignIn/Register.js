import React,{useState} from 'react'
import img from '../../assets/svg1.svg'
import './style.scss'
import useInputValidation from '../../hooks/useInputValidation';
 import * as firebase from 'firebase'
// import { useDispatch } from 'react-redux';
// import { authenticate,userid,username } from '../../Actions/Actions';



export default function Register(props) {

    // const dispatch = useDispatch();

    // validating form inputs using custom hook
    const [isFormValid, setIsFormValid] = useState(true);
    const {
        value: usernameInput,
        isValueValid: isUsernameValid,
        toShowError: usernameInputError,
        valueChangeHandler: usernameChangeHandler,
        onBlurHandler: usernameBlurHandler,
        reset: resetUsernameInput
    } = useInputValidation(value => value.trim() !== "");

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
    } = useInputValidation(value => value.trim().length>6);

    const registerHandler = (event) => {
        event.preventDefault();
        // overall form validity
        setIsFormValid(isUsernameValid && isPasswordValid && isEmailValid);
        if (isFormValid) {
             firebase.auth().createUserWithEmailAndPassword(emailInput, passwordInput)
                 .then((userCredential) => {
                     console.log(userCredential)
            //         dispatch(authenticate())
            //         dispatch(userid(userCredential.uid))
            //         dispatch(username(userCredential.uid))
                     firebase.database().ref(`/Username/`).child(userCredential.uid)
             .set({
                 usernameInput
             })
                 })
                 .catch((error) => {
                     console.log(error)
             });

            //storing username

            console.log("Form Valid");
             
        }
        else {
            setIsFormValid(false);
            console.log("Not valid");
        }

    // const todoRef = firebase.database().ref('Todo');
    // todoRef.on('value', (snapshot) => {
    //   const todos = snapshot.val();
    //     console.log(todos)
    // });
    
        resetUsernameInput();
        resetEmailInput();
        resetPasswordInput();
    }

      

    return (
        <div className="base-container" ref={props.containerRef}>
            <div className="header">
                REGISTER
            </div>
            <br />
            <div className="content">
                <div className="image">
                    <img src={img} alt="register" height="200px" width ="200px"/>
                </div>
                <div className="form">
                    {!isFormValid&&<p className="error">Form Invalid. Try again.</p>}
                    <div className="form-group">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={usernameInput}
                            onChange={usernameChangeHandler}
                            onBlur={usernameBlurHandler}
                        />
                        {usernameInputError&&<p className="error">Enter a valid username</p>}
                    </div>
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
                <button className="btn" type="submit" onClick={registerHandler}>Register</button>
            </div>
            
        </div>
    )
}
