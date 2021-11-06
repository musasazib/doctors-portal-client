import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading, user, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleSignInGoogle = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 15 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom component="div">
                        Login
                    </Typography>
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
                        <Button
                            sx={{ width: '75%', m: 1 }}
                            variant="contained"
                            type="submit"
                        >Login</Button>
                        <NavLink
                            to="/register"
                            style={{ textDecoration: 'none' }}
                        ><Button variant="text">New user? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                    <Button onClick={handleSignInGoogle} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;