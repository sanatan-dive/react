import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '/home/sana/Documents/MyPractice/react/07reactrouter/src/components/Header/Header.jsx'
import Footer from '/home/sana/Documents/MyPractice/react/07reactrouter/src/components/Footer/Footer.jsx'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout