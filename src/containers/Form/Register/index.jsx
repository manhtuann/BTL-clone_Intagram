import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '../../../components/Button/button';
import { Input } from '../../../components/Input/index';

import './css/register.css'

export const FormRegister = () => {
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

    // const [checkPassword, setCheckPassword] = useState(false)
    // const [checkEmail, setCheckEmail] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    const changeValue = (field) => (value) => {
        setData({
            ...data,
            [field]: {
                ...data[field],
                value: value,
            },
        });
    };


    const checkUser = () => {

    }


    useEffect(() => {
        checkUser()
    }, [data.email, data.password])

    return (
        <div className="wrap">
            <div id='login-container'>
                <form className='login-form'>
                    <h2>Register</h2>

                    <Input
                        id={'email-input'}
                        name={'email'}
                        placeholder={'Email...'}
                        data={data.email}
                        value={data.email.value}
                        handleChange={changeValue('email')}
                    />
                    <Input
                        id={'password-input'}
                        name={'password'}
                        placeholder={'Password'}
                        type={'password'}
                        data={data.password}
                        handleChange={changeValue('password')}
                    />
                    <Input
                        id={'password-retype'}
                        name={'password'}
                        placeholder={'Retype-Password'}
                        type={'password'}
                        data={data.password}
                        handleChange={changeValue('password')}
                    />




                    <Button text='Register' handleClick={handleSubmit} />
                    <span className='switch-acc'>Have an account? <a href="#">Login Here</a> </span>
                </form>
            </div>
        </div>
    );
};