import React, { useState } from 'react';
import './landing.css';
import userimg from './images/user.svg';
import fork from './images/fork.jpeg';
import logout from './images/logout.svg';
import { Navigate } from 'react-router-dom';

const Landing = () => {

    const [user, setUser] = useState('hritesh');

    if (!user) {
        return <Navigate to={"/"} />
    }

    return (
        <div className='main_back'>
            <header>
                <h1>𝓕𝖔𝖔𝖉𝖎𝖊𝖘.𝓬𝓸</h1>
                <div className='user_base'>
                    <img src={userimg} className='user' alt='user_icon' />
                    <button onClick={() => setUser(null)}>Logout<img src={logout} alt='' /></button>
                </div>
                <img src={fork} className='center_logo' alt='fork and knife' />
            </header>
            <div className='visuals'>
                <div className='content'>
                    <div className='search_bar'>
                        <input type='text' placeholder='' />
                        <button>Search</button>
                    </div>
                    <h2>Explore your Taste.</h2>
                    <p>Khane ke baare jaana he aajao baata dunga. Hyderabadi biryani dekhna he aajao boss dikha dunga.</p>
                </div>
            </div>
        </div>
    )
}

export default Landing;