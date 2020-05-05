import React, {useCallback, useReducer} from "react";
import Input from "../../shared/components/FormElements/Input";
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";
import {useForm} from "../../shared/hooks/form-hook";

const NewPlace = () => {
    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        address: {
            value: '',
            isValid: false
        }
    }, false);

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
                        <button className="btn btn-primary" type="submit" disabled={!formState.isValid}>ADD PLACE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewPlace;
