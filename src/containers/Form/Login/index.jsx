import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '../../../components/Button/button';
import './css/login.css';
import { ROUTE } from '../../../constants';
import { useNavigate,Link } from 'react-router-dom';

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
    const navigate = useNavigate()
    const [checkPassword, setCheckPassword] = useState(false)
    const [checkEmail, setCheckEmail] = useState(false)
    
        const [data, setData] = useState({
            email: {
                value: ""

            },
            password: {
                value: ""

            },
        });


    const [handleLogin] = useMutation(SIGN_IN,{
        onCompleted() {
            navigate(ROUTE.HOME)
        },
        onError(err){
            console.log(err);
        }
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data);

        handleLogin({
            variables: {
                data: 
                {
                    email:data.email.value,
                    password:data.password.value
                }
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

                    <div className='goto-create'>Not registered? <Link to={ROUTE.REGISTER}>Create an account</Link></div>
                </form>
            </div>
        </div>
    );
};