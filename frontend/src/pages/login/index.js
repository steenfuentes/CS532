import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, StyledEngineProvider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Login from '../../components/Auth/login'
import { Layout } from '../../layout/Layout'
import { Provider } from 'react-redux';
import { store } from '../../store'
import theme from '../../themes';


const loginPage = () => {

    return (

        <Layout>
            <Login />
        </Layout>

    )
}
export default loginPage;