import React, { useState } from 'react';
import { Button } from '../../../components/Button/button';
import { Input } from '../../../components/Input/index';
import { gql, useMutation } from '@apollo/client';
import {Link} from 'react-router-dom'

import './css/register.css'
import { ROUTE } from '../../../constants';

const SIGN_UP = gql`
mutation SignUp($data: SignUpInput!) {
    signUp(data: $data) {
    account {
        id
        identityNumber
        accountName
        lastName
        firstName
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
`

export const FormRegister = () => {
    const [data, setData] = useState({
        email: {
            value: ''
        },
        password: {
            value: ''
        },
        firstName: {
            value: ''
        },
        lastName: {
            value: ''
        }
    });
    const [handleRegister] = useMutation(SIGN_UP, {
        onCompleted(data) {
            alert("bạn đã đăng kí thành công! quay lại trang đăng nhập")
        },
        onError(err) {
            console.log(err);
        }
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);


        handleRegister({
            variables: {
                data: {
                    email:data.email.value,
                    password:data.password.value,
                    firstName:data.firstName.value,
                    lastName:data.lastName.value
                }
            }
        })

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
    return (
        <div className="wrap">
            <div id='register-container'>
                <form className='register-form'>
                    <h2>Register</h2>

                    <Input
                    className='input'
                        id={'email-input'}
                        name={'email'}
                        placeholder={'Email...'}
                        data={data.email}
                        value={data.email.value}
                        handleChange={changeValue('email')}
                    />
                    <Input
                    className='input'

                        id={'password-input'}
                        name={'password'}
                        placeholder={'Password'}
                        type={'password'}
                        data={data.password}
                        handleChange={changeValue('password')}
                    />
                    <Input
                    className='input'

                        id={'fistName'}
                        name={'name'}
                        placeholder={'firstName'}
                        type={'text'}
                        data={data.firstName}
                        handleChange={changeValue('firstName')}
                    />
                    <Input
                    className='input'

                        id={'lastName'}
                        name={'name'}
                        placeholder={'lastName'}
                        type={'text'}
                        data={data.lastName}
                        handleChange={changeValue('lastName')}
                    />




                    <Button text='Register' handleClick={handleSubmit} />
                    <span className='switch-acc'>Have an account? <Link to={ROUTE.LOGIN}> Login Here </Link> </span>
                </form>
            </div>
        </div>
    );
};