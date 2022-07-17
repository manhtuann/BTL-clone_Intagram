import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '../../../components/Button/button';
import './css/login.css';
import { gql , useMutation } from '@apollo/client';


const SIGN_IN = gql`
    mutation SignIn($data: SignInInput!) {
        signIn(data: $data) {
            account {
                id
                identityNumber
                accountName
                firstName
                lastName
                email
                birthday
                phoneNumber
                role
                isActive
                createdAt
                updatedAt
                deletedAt
            }
        }
    }
`;
export const FormLogin = () => {

    const [handleLogin] = useMutation(SIGN_IN,{
        onCompleted(data) {
            console.log(data);
        },
        onError(err){
            console.log(err);
        }
    });

    const [data, setData] = useState({
        email: {
            value: '',
            isError: false,
            msg: '',
        },
        password: {
            value: '',
            isError: false,
            msg: '',
        },
    });

    const [checkPassword, setCheckPassword] = useState(false)
    const [checkEmail, setCheckEmail] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);

        handleLogin({
            variables: {
                data: data
            }
        })

    };

    const changeValue = (field) => (event) => {
        setData({
            ...data,
            [field]: {
                ...data[field],
                value: event.target.value,
            },
        });
    };

    useEffect(() => {
        const pInput = document.getElementById('password-input');
        const eInput = document.getElementById('email-input');
        const autoCheck = () => {
            setCheckEmail(eInput.value.length < 4 || eInput.value.length > 60);
            setCheckPassword(pInput.value.length < 4 || pInput.value.length > 60)
        };

        eInput.addEventListener('input', autoCheck);
        pInput.addEventListener('input', autoCheck);

        return () => {
            eInput.removeEventListener('input', autoCheck);
            pInput.removeEventListener('input', autoCheck);
        }
    }, [])

    return (
        <div className="wrap">
            <div id='login-container'>
                <form className='login-form'>
                    <h2>Log In</h2>
                    <input
                        id='email-input'
                        name={'email'}
                        placeholder={'Email...'}
                        data={data.email}
                        onChange={changeValue('email')}
                    />
                    {checkEmail && <span className='error-password'>Please enter a valid email or phone number.</span>}
                    <input
                        id='password-input'
                        name={'password'}
                        placeholder={'********'}
                        type={'password'}
                        data={data.password}
                        onChange={changeValue('password')}

                    />
                    {checkPassword && <span className='error-password'>Your password must contain between 4 and 60 characters.</span>}

                    <Button text='Sign In' handleClick={handleSubmit} />

                    <div className='goto-create'>Not registered? <a href="">Create an account</a></div>
                </form>
            </div>
        </div>
    );
};