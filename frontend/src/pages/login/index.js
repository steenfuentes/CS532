import React from 'react'
import Layout from '../../layouts/Layout'
import ButtonAppBar from '../../components/LandingPage/Navigation/Navbar'
import Footer from '../../components/Footer/Footer'
import LoginPage from '../../components/Auth/login'

export default function loginTest() {
    return (
        <>
            <ButtonAppBar />
            <div style={{ height: '80vh', marginTop: '20px', padding: 0 }}>
                <LoginPage />


            </div>
            <Footer />
        </>
    )
}