import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { loginUser } from '../../../services/login';
import sessionStore from '../../../stores/sessionStore/sessionStore';
import { observer, inject } from 'mobx-react';

import {
    Form,
    FormAdditionalLink,
    FormGeneralError,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormSubmitSuccess,
    FormButton
} from '../FormStyles';

const LoginForm = (props) => {
    const { register, handleSubmit, errors, control } = useForm({
        nativeValidation: true
    });
    const [successMsg, setSuccessMsg] = useState('');
    const session = props.sessionStore;

    const onSubmit = data => {
        loginUser(data).then(response => {
            if (response !== undefined) {
                if (response.data.message === "Auth successful" && response.data.token) {
                    setSuccessMsg('Successful login.');
                    session.setToken(response.data.token);
                } else if (response.data.message) {
                    setSuccessMsg(response.data.message);
                }
            }
        });
    };

    const loginForm =
        <Form onSubmit={handleSubmit(onSubmit)} >
            <FormRow>
                <FormAdditionalLink to="/register">You don't have an account? Click here to register!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                    type="text"
                    id="username"
                    name="username"
                    control={control}
                    ref={register({ required: true })}
                />
                <FormInputValidation>{errors.username && <span>This field is required</span>} </FormInputValidation>
            </FormRow>

            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    control={control}
                    ref={register({ required: true })}
                />
                <FormInputValidation>{errors.password && <span>This field is required</span>} </FormInputValidation>
            </FormRow>

            <FormButtonRow>
                <FormButton type="submit" >Login</FormButton>
            </FormButtonRow>
            <FormGeneralError></FormGeneralError>
        </Form>;

    return (
        <>
            {loginForm}
            {successMsg && <FormSubmitSuccess>{successMsg}</FormSubmitSuccess>}
        </>
    );
}

function mapServicesToProps() {
    return {
        sessionStore
    }
}

export default inject(mapServicesToProps)(observer(LoginForm));