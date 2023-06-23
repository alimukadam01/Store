import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div class="navbar">
            <Link to='/'>Home</Link>
            <div class="dropdown">
                <button class="dropbtn">
                    <div class="navbar-brand"><span className="home">Categories</span>
                        <div className='vect'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </button>
                <div class="dropdown-content">
                    <div class="row">
                        <div class="column">
                            <Link to="/category">Fruit & Vegetables</Link>
                            <Link to="/category">Dairy, cheese & juice</Link>
                            <Link to="/category">Bread & bakery</Link>
                            <Link to="/category">Meat & Charcuterie</Link>
                            <Link to="/category">Drink</Link>
                            <Link to="/category">Pantry</Link>
                            <Link to="/category">Fish Shellfish</Link>
                            <Link to="/category">Home & Household</Link>
                        </div>
                        <div class="column">
                            <Link to="/category">Ready meals & Snacks</Link>
                            <Link to="/category">Ice cream, sweets & snacks</Link>
                            <Link to="/category">Baby food & accessories</Link>
                            <Link to="/category">Pharmacy, Hygiene & Health</Link>
                            <Link to="/category">Spices & Flavourings</Link>
                            <Link to="/category">Pet food & accessories</Link>
                            <Link to="/category">Kiosk & Newspapers</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn"><div class="navbar-brand"><span className="home">Offers</span>
                    <div className='vect'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </div></div>
                </button>
                <div class="dropdown-content2">

                    <div class="row">
                        <div class="column1">
                            <a href="#">Extra prices</a>
                            <a href="#">Bargain Corner</a>
                        </div>

                    </div>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn"><div class="navbar-brand"><span className="home">More</span>
                    <div className='vect'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </div></div>
                </button>
                <div class="dropdown-content3">
                    <div class="row">
                        <div class="column3">
                            <h3 className="title">Explore</h3>
                            <a href="#">New in the shop</a>
                            <a href="#">Organic goods</a>
                            <a href="#">Goods thar suit me</a>
                            <a href="#">Prescription</a>
                        </div>
                        <div class="column3">
                            <h3 className="title">Inspiration</h3>
                            <a href="#">Health</a>
                            <a href="#">Everyday recipes</a>
                            <a href="#">Weekend, party & holiday</a>
                            <a href="#">Tips and tricks</a>
                            <a href="#">Companies and associations</a>
                            <a href="#">Recipe collections</a>
                            <a href="#">Collaborations</a>
                            <a href="#">All articles</a>
                        </div>
                        <div class="column3">
                            <a href="#"></a>
                            <a href="#">Customer service</a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#home">For companies
            </a>
            <span className="div"></span>
            <Link to='/register'>New Customer
            </Link>
            <Link to='/register'>Sign In
            </Link>
            
        </div>
    )
}

export default Navbar