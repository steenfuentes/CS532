import React, { useState } from 'react'
import { withFormik, Form, Field } from 'formik'
import { makeStyles } from '@mui/styles';
import { Button, Box, TextField, AppBar, Toolbar, Grid, Typography, Paper, Link } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});


const LoginPage = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const classes = useStyles();
    function handleChange(event) {
        setUsername(event.state.username)
        setPassword(event.state.password)
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (username == '' && password == '') {
            props.history.push("/dashboard");
        } else {
            alert('Incorrect Credntials!');
        }
    }

    return (
        <div>
            <Box sx={{ bgcolor: 'white' }}>
                <Grid sx={{ flexGrow: 1 }} container direction="row" spacing={2}>
                    <Grid item xs={12} spacing={0} justify="center">
                        <Grid item>
                            <Typography variant="h5">
                                Sign in
                            </Typography>
                        </Grid>
                        <Grid item>
                            <form onSubmit={handleSubmit}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item spacing={2}>
                                        <TextField
                                            type="email"
                                            placeholder="Email"
                                            fullWidth
                                            name="username"
                                            variant="outlined"
                                            value={username}
                                            onChange={e => setUsername(e.target.value)} required
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
                                            onChange={e => setPassword(e.target.value)} required
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Link href="/admin">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                className={""}
                                            >
                                                Submit
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                        <Grid item>
                            <Link href="" variant="body2">
                                Forgot Password?
                            </Link>
                        </Grid>


                    </Grid>
                </Grid>
            </Box>
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