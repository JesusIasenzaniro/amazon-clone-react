import React, { useState, useEffect } from 'react';
import './CSS/Form.css';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
// import 'react-phone-input-2/lib/style.css';
import { Link } from 'react-router-dom';

export const ButtonStyled = withStyles(() => ({
    root: {
        backgroundColor: 'rgb(120, 166, 187)',
        color: 'white',
        fontSize: '12px',
        margin: '1px',
        '&:hover': {
            backgroundColor: 'rgb(31, 69, 87)',
        },
    },
}))(Button);
const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState();
    const [address, setAddress] = useState('');

    const onSubmit = (e) => {
        console.log(name, lastName, email, number, address);
        e.preventDefault();
        setName('');
        setlastName('');
        setEmail('');
        setNumber('');
        setAddress('');
    };

    return (
        <Grid container justify='center' alignItems='center' className='container__outer'>
            <ValidatorForm onSubmit={onSubmit} className='container__form'>
                <Grid container justify='center' className='form__title'>
                    <h3>Delivery form</h3>
                </Grid>
                <Divider />
                <ul>
                    <Grid container justify='center' className='form__categorie'>
                        Name
                    </Grid>
                    {/* onChange={(e) => setName(e.target.value)} */}

                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        id='outlined-basic'
                        variant='outlined'
                        label='Name'
                        fullWidth
                        inputlabelprops={{
                            shrink: true,
                        }}
                    ></TextField>

                    <Grid container justify='center' className='form__categorie'>
                        Last Name
                    </Grid>
                    <TextField
                        onChange={(e) => setlastName(e.target.value)}
                        value={lastName}
                        id='outlined-basic'
                        variant='outlined'
                        label='Last Name'
                        fullWidth
                        inputlabelprops={{
                            shrink: true,
                        }}
                    />
                    <Grid container justify='center' className='form__categorie'>
                        Email
                    </Grid>

                    <TextValidator
                        label='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        value={email}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                        fullWidth
                        inputlabelprops={{
                            shrink: true,
                        }}
                        id='outlined-basic'
                        variant='outlined'
                    />

                    <Grid container justify='center' className='form__categorie'>
                        Contact Number
                    </Grid>

                    <PhoneInput id='outlined-basic' variant='outlined' placeholder='Enter phone number' value={number} onChange={setNumber} />

                    <Grid container justify='center' className='form__categorie'>
                        Delivery Address
                    </Grid>
                    <TextValidator
                        label='Address'
                        onChange={(e) => setAddress(e.target.value)}
                        name='address'
                        value={address}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        fullWidth
                        inputlabelprops={{
                            shrink: true,
                        }}
                        id='outlined-basic'
                        variant='outlined'
                    />
                </ul>
                {/* <Divider /> */}
                <Grid container justify='center' className='submit__button'>
                    {name && lastName && email && number && address ? (
                        <ButtonStyled type='submit'>
                            <Link className='Link' to='/checkout'>
                                Submit
                            </Link>
                        </ButtonStyled>
                    ) : (
                        <ButtonStyled type='submit' disabled>
                            <Link className='Link' to='/checkout'>
                                Submit
                            </Link>
                        </ButtonStyled>
                    )}
                </Grid>
            </ValidatorForm>
        </Grid>
    );
};

export default Form;
