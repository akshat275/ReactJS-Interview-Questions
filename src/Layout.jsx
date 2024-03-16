import React from 'react'
import Header from './components/react-router/Header/Header'
import Footer from './components/react-router/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
