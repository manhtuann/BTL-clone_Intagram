import React, { useState } from 'react';
import '../Navbar/index.css';
import NavIcon from './NavIcon';
import {Link} from 'react-router-dom';
import { ROUTE } from '../../../constants';

function Navbar() {

    const [togger,setTogger] = useState(false)

    function handleTogger(){
        setTogger(!togger)
    }
    return (
        <>
            <nav className='nav'>
                <div className="nav-wrap">
                    <div className="nav-logo">
                        <Link to={ROUTE.HOME}><img className='img-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="" /></Link>
                    </div>
                    <div className="nav-search">
                        <input type="text" placeholder='Search' className='search' />

                    </div>
                    <div className="nav-list-items">
                        <ul className='items'>

                            <NavIcon />
                            <li className='items' onClick={handleTogger}>
                                <img alt="p.m.t.10.03's profile picture" draggable="false" src="https://images.unsplash.com/photo-1644982652061-df82282e178d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80">
                                </img>
                            </li>
                        </ul>
                    </div>
                    <div className={togger ? 'nav-lv2' : 'nav-lv2 active'}>
                        <ul className="nav-list-lv2">
                            <li><Link className="item-lv2" to={ROUTE.PROFILE}>Profile</Link></li>
                            <li className="item-lv2">Saved</li>
                            <li className="item-lv2">Settings</li>
                            <li className="item-lv2">Switch accounts</li>
                        </ul>
                        <Link to={ROUTE.LOGIN} className='logout'>Log Out</Link>
                        
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar