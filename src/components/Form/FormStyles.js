import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
    margin: 0 auto;
    max-width: 400px;
    height: auto;
`;

export const FormAdditionalLink = styled(NavLink)`
    display: block;
    margin: 0 auto;
    text-align: center;
    font-size: 15px;
    color: #c59613;
    transition: color 0.3s ease-out;

    &:hover {
        cursor: pointer;
        color: #9e7911;
    }
`;

export const FormGeneralError = styled.p`
    margin: 0 auto;
    font-size: 14px;
    text-align: center;
    color: #ba2b2b;
    margin-top: 30px;
`;

export const FormRow = styled.div`
    position: relative;
    margin-bottom: 35px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const FormButtonRow = styled.div`
    margin-top: 50px;
`;

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
`;

export const FormInput = styled.input`
    display: block;
    border: 1px solid #cecece;
    border-radius: 6px;
    width: 100%;
    line-height: 50px;
    font-size: 17px;
    padding: 0 10px;
    outline: none;

    &:focus {
        border-color: #c59613;
    }
`;

export const FormInputValidation = styled.span`
    position: absolute;
    bottom: -20px;
    display: block;
    font-size: 12px;
    color: #ba2b2b;
`;

export const FormSubmitSuccess = styled.p`
    margin: 0 auto;
    max-width: 300px;
    text-align: center;
    font-size: 16px;
    line-height: 150%;
    font-weight: bold;
    margin-top: 120px;
`;

export const FormButton = styled.button`
    display: block;
    width: 100%;
    line-height: 40px;
    text-transform: uppercase;
    text-align: center;
    background-color: #c59613;
    border-radius: 6px;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    transition: all 0.3s ease-out;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
        background-color: #9e7911;
    }

    &:disabled {
        pointer-events: none;
        opacity: 0.5;
    }
`;

