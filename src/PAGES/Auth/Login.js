import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import logo from '../../ASSETS/logo.png'
import { Link } from 'react-router-dom'
import './Authpage.css'
const Login = () => {
  return (
    <div className='authpage'>
        <Navbar/>
        <div className="authcont">
            <img src={logo} alt="login" />

            <form action="" className='authform'>
                <h1>Login</h1>
                <div className="formgroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <div className="formgroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <Link to='/forgetpassword'
                className='stylenone'
                >
                <p>Forgot password?</p>
                </Link>
                <Link to='/Login'
                className='stylenone'
                >
                <button className='btn'>Login</button>
                </Link>
                <h2 className='or'>OR</h2>
                <Link to='/Signup'
                className='stylenone'
                >
                <button className='btn'>Signup</button>
                </Link>
            </form>
        </div>



        <Footer1/>
        <Footer2/>
    </div>
  )
}

export default Login