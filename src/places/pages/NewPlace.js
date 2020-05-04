import React, {useCallback, useReducer} from "react";
import Input from "../../shared/components/FormElements/Input";
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {value: action.value, isValid: action.isValid}
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
};

const NewPlace = () => {
    const [formState, setFormState] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    });

    const inputHandler = useCallback((id, value, isValid) => {
        setFormState({type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id})
    }, []);

    const placeSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={placeSubmitHandler}>
                        <Input
                            type="text"
                            label="Title"
                            placeholder="Title"
                            id="title"
                            element="input"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a valid title"
                            onInput={inputHandler}
                        />
                        <Input
                            label="Description"
                            id="description"
                            element="textarea"
                            validators={[VALIDATOR_MINLENGTH(5)]}
                            errorText="Please enter a valid description, min 5 characters"
                            onInput={inputHandler}
                        />
                        <Input
                            label="Address"
                            id="address"
                            element="input"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a valid address"
                            onInput={inputHandler}
                        />
                        <button className="btn btn-primary" type="submit" disabled={!formState.isValid}>ADD PLACE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewPlace;
