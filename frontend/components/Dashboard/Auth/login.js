import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik'
import { makeStyles } from '@mui/styles';
import { Button, Box, TextField, AppBar, Toolbar, Grid, Typography, Paper, Link } from '@material-ui/core'
import { useRouter } from 'next/router';


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

export default function LoginPage(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const classes = useStyles();
    function handleSubmit(event) {
        event.preventDefault();
        console.log("You pressed login")
        let opts = {
            'email': email,
            'password': password
        }
        console.log(opts)
        fetch('http://localhost:5000/login/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(opts)
        }).then(r => console.log(r.json()))
            .then(token => {
                if (token.access_token) {
                    login(token)
                    console.log(token)
                }
                else {
                    console.log("Please type in correct username/password")
                }
            })
    }


    return (
        <div>
            <Box sx={{ bgcolor: 'white' }}>
                <Grid sx={{ flexGrow: 1 }} container direction="row" spacing={2}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Grid item>
                            <Typography variant="h5">
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
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
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
                                            onChange={(e) => setPassword(e.target.value)}
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


