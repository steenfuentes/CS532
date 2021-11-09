import React from 'react'
import { withFormik, Form, Field } from 'formik'
import { Button, FormLabel, TextField } from '@material-ui/core'

const LoginPage = (props) => {
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

    return (

        <div className="container">
            <div className="login-wrapper" style={loginPageStyle}>
                <h2>Login Page</h2>
                <Form className="form-container">
                    <div className="form-group" style={labelStyles}>
                        <FormLabel htmlFor="email" style={labelStyles}>Email</FormLabel>
                        <TextField type="text" name="email" className={"form-control"} placeholder="Email" />
                    </div>
                    <div className="form-group" style={labelStyles}>
                        <FormLabel htmlFor="password" style={labelStyles}>Password</FormLabel>
                        <TextField type="password" name="password" className={"form-control"} placeholder="Password" />
                    </div>
                    <Button style={buttonStyle} type="submit" className="btn btn-primary">Login</Button>
                </Form>
            </div>
        </div>
    )
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