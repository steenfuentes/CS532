import React from 'react'
import Navbar from '../components/Navigation/Navbar'
import Footer from '../components/Footer/Footer'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout;
