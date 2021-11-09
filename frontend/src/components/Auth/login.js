import React, { useState } from 'react'
import { withFormik, Form, Field } from 'formik'
import { Button, FormLabel, TextField, AppBar, Toolbar, Grid, Typography, Paper, Link } from '@material-ui/core'

const LoginPage = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const loginPageStyle = {
        margin: "32px auto 37px",
        maxWidth: "530px",
        minHeight: '300px',
        background: 'rgb(36 106 173)',
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)"
    }
    const labelStyles = {
        padding: '5px'
    }
    const buttonStyle = {
        background: '#fff'
    }
    function handleChange(event) {
        setUsername(event.state.username)
        setPassword(event.state.password)
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (state.username == '' && state.password == '') {
            props.history.push("/home");
        } else {
            alert('Incorrect Credntials!');
        }
    }


    return (
        <div>
            <Grid justify="center" item xs={12} sm={6} md={3}>
                <Grid item>
                    <Grid
                        justify="center"
                        spacing={2}

                    >
                        <Paper
                            variant="elevation"
                            elevation={2}
                            className="login-background"
                        >
                            <Grid item>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                            </Grid>
                            <Grid item>
                                <form onSubmit={handleSubmit}>
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item>
                                            <TextField
                                                type="email"
                                                placeholder="Email"
                                                fullWidth
                                                name="username"
                                                variant="outlined"
                                                value={username}
                                                onChange={handleChange}
                                                required
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                type="password"
                                                placeholder="Password"
                                                fullWidth
                                                name="password"
                                                variant="outlined"
                                                value={password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                className="button-block"
                                            >
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Forgot Password?
                                </Link>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}



const LoginFormik = withFormik({
    mapPropsToValues: (props) => {
        return {
            email: props.email || '',
            password: props.password || ''
        }
    },
    handleSubmit: (values) => {
        console.log(values)
    }
})(LoginPage)

export default LoginFormik