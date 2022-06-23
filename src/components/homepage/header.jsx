import { React } from 'react'
import '../../styles/homepage/header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <div className='header1'>
            <img className='logo' src={logo} alt="" />
            <Link className='services' to="/services">Services</Link>
            <Link className='about' to="/about">About</Link>
            <Link className='help' to="/help">Help</Link>
        </div>
        <div className='header2'>
            <Link className='login' to="/login">Log In</Link>
            <Link className='signup' to="/signup">Get Started</Link>
        </div>
    </div>
  )
}