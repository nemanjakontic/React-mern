import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

import Input from "../../shared/components/FormElements/Input";
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";
import {useForm} from "../../shared/hooks/form-hook";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous buildings',
        imageURL: 'https://images.unsplash.com/photo-1588501302208-26ca3e841c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        address: 'Kneza Milosa 15',
        location: {
            lat: 40.7484445,
            lng: -73.9878477
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous buildings',
        imageURL: 'https://images.unsplash.com/photo-1588501302208-26ca3e841c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        address: 'Kneza Milosa 15',
        location: {
            lat: 40.7484445,
            lng: -73.9878477
        },
        creator: 'u2'
    }
];

const UpdatePlace = props => {
    const [isLoading, setIsloading] = useState(true);
    const placeId = useParams().placeId;

    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false);

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    useEffect(() => {
        setFormData({
            title: {
                value: identifiedPlace.title,
                isValid: true
            },
            description: {
                value: identifiedPlace.description,
                isValid: false
            }
        }, true);
        setIsloading(false);
    }, [setFormData, identifiedPlace]);


    if (!identifiedPlace) {
        return <div><h2>Could not find place!</h2></div>
    }

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    return (
        !isLoading &&
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={placeUpdateSubmitHandler}>
                        <Input
                            id="title"
                            element="input"
                            type="text"
                            label="Title"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a valid value."
                            onInput={inputHandler}
                            value={formState.inputs.title.value}
                            valid={formState.inputs.title.isValid}
                        />
                        <Input
                            id="description"
                            element="textarea"
                            label="Description"
                            validators={[VALIDATOR_MINLENGTH(5)]}
                            errorText="Please enter a valid value."
                            onInput={inputHandler}
                            value={formState.inputs.description.value}
                            valid={formState.inputs.description.isValid}
                        />
                        <button className="btn btn-success" type="submit" disabled={!formState.isValid}>UPDATE PLACE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePlace;
