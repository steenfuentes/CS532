import React from 'react'
import HeaderMUI from '../components/DesktopNav/HeaderMUI'
import Footer from '../components/Footer/Footer'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <Container>
      <HeaderMUI />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
