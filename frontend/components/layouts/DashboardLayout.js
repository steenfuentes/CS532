import React from 'react'
import Navbar from '../components/Dashboard/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Container } from '@material-ui/core'

export const DashboardLayout = ({ children }) => {
    return (
        <Container style={{ maxWidth: "1280px", width: "100%", margin: "auto" }}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </Container>
    )
}

export default DashboardLayout;