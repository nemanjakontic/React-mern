import React, {useContext, useState} from "react";
import Input from "../../shared/components/FormElements/Input";
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";
import {useForm} from "../../shared/hooks/form-hook";
import {AuthContext} from "../../shared/context/auth-context";

const Auth = props => {
    const auth = useContext(AuthContext);
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false);

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
        auth.login();
    };

    const [isLogin, setIsLoginMode] = useState(true);

    const switchModeHandler = () => {
        if(!isLogin) {
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.valid && formState.inputs.password.isValid);
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false);
        }
        setIsLoginMode(prevMode => !prevMode);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={authSubmitHandler}>
                        {!isLogin &&
                        <Input element="input" id="name" type="text" label="Name" validators={[VALIDATOR_REQUIRE()]}
                               errorText="Please insert valid name" onInput={inputHandler}/>}
                        <Input
                            id="email"
                            element="input"
                            type="email"
                            label="E-mail"
                            validators={[VALIDATOR_EMAIL()]}
                            errorText="Please enter valid email"
                            onInput={inputHandler}
                        />
                        <Input
                            id="password"
                            element="input"
                            type="password"
                            label="Password"
                            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                            errorText="Please enter valid password"
                            onInput={inputHandler}
                        />
                        <button type="submit" disabled={!formState.isValid}>{isLogin ? 'LOGIN' : 'SIGN UP'}</button>
                    </form>
                    <button onClick={switchModeHandler}>SWITCH TO {isLogin ? 'SIGNUP' : 'LOGIN'}</button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
