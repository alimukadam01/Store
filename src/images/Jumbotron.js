import React from 'react'
import './Jumbotron.css'

function Jumbotron() {
    return (
        <div className="jumbo">
            <div
                className='jumbou'
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')" }}
            >
                <span className="easier">Easier, cheaper and faster than ever</span>
                <div className="call2act">
                    <span className="tt">Food when it suits you</span>
                    <span className="uu">We deliver goods to over half of all household in Sweden. Enter your zip code to book a delivery time.</span>
                    <a href="#"><div className="actButton">
                        <span className="ass">Can I get delivery time?</span></div></a>
                </div>

            </div>
        </div>
    )
}

export default Jumbotron