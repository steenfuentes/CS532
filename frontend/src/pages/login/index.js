import React from 'react'
import Layout from '../../layouts/Layout'
import LoginFormik from '../../components/Auth/login'
import ButtonAppBar from '../../components/LandingPage/Navigation/Navbar'
import Footer from '../../components/Footer/Footer'

export default function loginTest() {
    return (
        <>
            <ButtonAppBar />
            <LoginFormik />
            <Footer />
        </>
    )
}