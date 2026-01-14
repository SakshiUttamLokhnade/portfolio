import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import '../App.css'

const Layout = () => {
  return (
    <div className="page">
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
