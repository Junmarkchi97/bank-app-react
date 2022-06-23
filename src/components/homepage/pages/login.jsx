import { React, useState } from 'react'
import '../../../styles/homepage/login.css'
import logo from '../../../assets/logo.png'
import { select } from '../../../utils'
import { Link } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard'

export default function Login({ Login }) {
  const [details, setDetails] = useState({email: "", password: ""})
  const emailInput = select('.input-email')
  const passInput = select('.input-pass')

  const submitHandler = e => {
    e.preventDefault()

    Login(details)
  }

  // window.addEventListener('keydown', () => {
  //   console.log('ok')
  // })

  // emailInput.addEventListener

  const displayDashboard = e => {
    e.preventDefault()

    <Dashboard />
  }

  return (
    <div className='login-user'>
      <div className="login-container">
        <img src={logo} alt="logo"></img>
        <p>Sign in</p>
        <form onSubmit={submitHandler} className='input-form'>
          <div className='email'>
            <label className='label-email' htmlFor="email">Email Address</label>
            <input autoComplete='username' className='input-email' type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
          </div>
          <div className='pass'>
            <label className='label-pass' htmlFor="password">Password</label>
            <input autoComplete='current-password' className='input-pass' type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
          </div>
          <div className='error'>Account does not exist!</div>
          {/* <Link to="/dashboard"> */}
            <input className='submit' type="submit" value="Sign In"/>
          {/* </Link> */}
        </form>
        <Link to='/'>Forgot your password?</Link>
        <span>Don't have a Banko account?</span>
        <Link to="/create">
          <button className='create'>Create new account</button>
        </Link>
      </div>
    </div>
  )
}