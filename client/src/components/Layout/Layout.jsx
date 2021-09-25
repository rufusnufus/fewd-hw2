import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './index.css'

function Layout({ children, layoutClassName }) {
  return (
    <>
      <Header />
      <main className={layoutClassName || 'layout__main'}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
