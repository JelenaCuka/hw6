import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { registerUser } from '../../../services/register';

import {
    Form,
    FormAdditionalLink,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormSubmitSuccess,
    FormButton
} from '../FormStyles';

var RegisterForm = () => {
    const { register, handleSubmit, errors, control } = useForm({
        nativeValidation: true
    });
    const [messageUpdated, setMessageUpdated] = useState('');

    const onSubmit = data => {
        registerUser(data).then(response => {
            if (response !== undefined) {
                if (response.data.username) {
                    setMessageUpdated('Successful registration, ' + response.data.username + '!');
                } else if (response.data.message) {
                    setMessageUpdated(response.data.message);
                }
            }
        });
    };

    const registerForm =
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <FormAdditionalLink to="/login">Already registered? Click here to login!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                    type="text"
                    id="username"
                    name="username"
                    control={control}
                    ref={register({ required: true, minLength: 5 })}
                />
                <FormInputValidation>
                    {errors.username && errors.username?.type === "required" && <span>This field is required.</span>}
                    {errors.username && errors.username?.type === "minLength" && <span>This field has to be at least 5 characters long.</span>}
                </FormInputValidation>
            </FormRow>


            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    control={control}
                    ref={register({ required: true, minLength: 8 })}
                />
                <FormInputValidation>
                    {errors.password && errors.password?.type === "required" && <span>This field is required.</span>}
                    {errors.password && errors.password?.type === "minLength" && <span>This field has to be at least 8 characters long.</span>}
                </FormInputValidation>
            </FormRow>
            <FormButtonRow>
                <FormButton type="submit" >Register</FormButton>
            </FormButtonRow>
        </Form>;

    return (
        <>
            {registerForm}
            <FormSubmitSuccess>
                {messageUpdated}
            </FormSubmitSuccess>
        </>
    );
}

export default RegisterForm;