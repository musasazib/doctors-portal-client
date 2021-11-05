import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const { registerUser, isLoading, user, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password dont Match');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 15 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom component="div">
                        Register
                    </Typography>
                    {!isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Retype Password"
                                type="password"
                                name="password2"
                                onChange={handleOnChange}
                                variant="standard" />
                            <Button
                                sx={{ width: '75%', m: 1 }}
                                variant="contained"
                                type="submit"
                            >Register</Button>
                            <NavLink
                                to="/login"
                                style={{ textDecoration: 'none' }}
                            ><Button variant="text">Already Register? Please Login</Button>
                            </NavLink>
                        </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Register successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;