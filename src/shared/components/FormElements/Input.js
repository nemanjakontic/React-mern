import React, {useReducer, useEffect} from "react";
import {validate} from "../../util/validators";

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched : true
            };
        default:
            return state;
    }
};

const Input = props => {
    const [inputState, setState] = useReducer(inputReducer, {
        value: '',
        isValid: false,
        isTouched: false
    });

    const changeHandler = event => {
        setState({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    };

    const {id, onInput} = props;
    const {value, isValid} = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const touchHandler = () => {
        setState({
           type: 'TOUCH'
        });
    };

    const element = props.element === 'input' ? (
            <input
                className="form-control"
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        ) : (
            <textarea
                className="form-control"
                id={props.id}
                rows={props.rows || 3}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
            );


    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    );
};

export default Input;
