import Homepage from './components/homepage/homepage'
import LoginUser from './components/homepage/pages/login'
// import Signup from './components/homepage/pages/signup'
import './styles/app.css'
import { React, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard'
import { select } from './utils'

function App() {
  const adminUser = {
    email: "chi@admin.com",
    password: "12345678"
  }

  const [user, setUser] = useState({name: "", email: ""})

  const Login = details => {
    if(details.email === adminUser.email && details.password === adminUser.password){
    console.log(details)

      setUser({
        email: details.email,
        password: details.password
      })
      select('.error').style.opacity = "0"
    }else{
      select('.error').style.opacity = "1"
    }
  }

  // const Logout = () => {
  //   console.log("Logout")
  // }

  return(
    <div className='App'>
      <Routes>
        <Route path="/bank-app-react" element={<Homepage/>}/>
        <Route path="/login" element={<LoginUser Login={Login}/>}/>
      </Routes>
    </div>
  )
}

export default App;
