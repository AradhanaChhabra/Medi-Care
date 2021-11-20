import { useReducer } from "react";

// initial state
const initialInputState = {
    value: '',
    isTouched:false
}
const inputReducerFunction = (state, action) => {
    if (action.type === 'INPUT')
        return { ...state,value: action.value}
    else if (action.type === 'BLUR')
        return {...state, isTouched: true }
    else return initialInputState;
}

export default function useInputValidation(validator) {
    const [inputState, dispatch] = useReducer(inputReducerFunction,initialInputState)
    // console.log(inputState);
    const isValueValid = validator(inputState.value);
    const toShowError = !isValueValid && inputState.isTouched;
    const valueChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value});
    }
    const onBlurHandler = () => {
        dispatch({ type: "BLUR" });
    }
    const resetInput = () => {
        dispatch({ type: 'RESET' });
    }
    return {
        value: inputState.value,
        isValueValid,
        toShowError,
        onBlurHandler,
        valueChangeHandler,
        reset:resetInput,
    }
}
// no error while typing for the first time =>not touched
// error when input loses its focus(consistent after first time)
// error managment after every keystroke from then ownwards 