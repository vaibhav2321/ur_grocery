import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import logo from '../../ASSETS/logo.png'
import { Link } from 'react-router-dom'
import './Authpage.css'
const Signup = () => {
  return (
    <div className='authpage'>
        <Navbar/>
        <div className="authcont">
            <img src={logo} alt="login" />

            <form action="" className='authform'>
                <h1>Signup</h1>
                <div className="form-group-row">
                <div className="formgroup">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" />
                </div>
                <div className="formgroup">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" />
                </div></div>
                <div className="formgroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <div className="form-group-psd">
                    
                <div className="formgroup">
                    <label htmlFor="password">Set Password</label>
                    <input type="password" id="password" />
                    <label htmlFor="password">Conform Password</label>
                    <input type="password" id="password" />
                </div>
                </div>
                <Link to='/Login'
                className='stylenone'
                >
                <p>Already have an account?</p>
                </Link>
                <Link to='/Login'
                className='stylenone'
                >
                <button className='btn'>Login</button>
                </Link>
            </form>
        </div>



        <Footer1/>
        <Footer2/>
    </div>
  )
}

export default Signup