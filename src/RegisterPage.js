import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Headline from './Headline'
import Navbar from './Navbar'
import "./RegisterPage.css"




function RegisterPage() {

  const [formType, setFormType] = useState('signup'); // Initial form type
  const [name, setName] = useState(''); // State for name input
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input

  const handleFormType = (event) => {
    setFormType(event.target.id); // Set form type to clicked element's id
  };

  const handleNameChange = (event) => {
    setName(event.target.value); // Update name state with input value
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update email state with input value
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Update password state with input value
  };

  const handleSignUp = (event) => {
    event.preventDefault(); // Prevent form submission
    // Validate form input and sign up user
  };

  const handleLogIn = (event) => {
    event.preventDefault(); // Prevent form submission
    // Validate form input and log in user
  };

    return (
        <>
            <Header />
            <Navbar />
            <Headline />
            <div className="cont">
                <div className="form-structor">
                    <div className={`signup ${formType === 'login' ? 'slide-up' : ''}`}>
                        <h2 className="form-title" id="signup" onClick={handleFormType}><span>or</span>Sign up</h2>
                        <form onSubmit={handleSignUp}>
                            <div className="form-holder">
                                <input type="text" className="input" placeholder="Name" value={name} onChange={handleNameChange} />
                                <input type="email" className="input" placeholder="Email" value={email} onChange={handleEmailChange} />
                                <input type="password" className="input" placeholder="Password" value={password} onChange={handlePasswordChange} />
                            </div>
                            <Link to='/' className="submit-btn">Sign Up</Link>
                        </form>
                    </div>
                    <div className={`login ${formType === 'login' ? '' : 'slide-up'}`}>
                        <div className="center">
                            <h2 className="form-title" id="login" onClick={handleFormType}><span>or</span>Log in</h2>
                            <form onSubmit={handleLogIn}>
                                <div className="form-holder">
                                    <input type="email" className="input" placeholder="Email" value={email} onChange={handleEmailChange} />
                                    <input type="password" className="input" placeholder="Password" value={password} onChange={handlePasswordChange} />
                                </div>
                                <Link to='/' className="submit-btn">Sign Up</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RegisterPage