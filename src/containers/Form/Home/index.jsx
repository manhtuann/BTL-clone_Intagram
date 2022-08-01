import React from 'react'
import Navbar from '../Navbar/index'
import './home.css'
import NewFeed from './Newfeed'
import ProfileIcon from './ProfileIcon'
import Story from './Stories/Story'


function PageHome() {
    return (
        <>
            <Navbar />
            <div className='home-container'>
                <div className="home-wrap">
                <div className="home-left">
                    <Story />
                    <NewFeed likedByText='manhtuann' hours ='1'/>

                </div>
                <div className="home-right">
                    <div className="right-wrap">
                        <div className="right-user">
                            <img src="https://images.unsplash.com/photo-1644982652061-df82282e178d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                            <div className="right-name">
                                <span>p.m.t.10.03</span>
                                <div>Mạnh Tuấn</div>
                            </div>
                            <div className="switch">Switch</div>
                        </div>
                        <div className="sugges">
                            <div className='sug'>Suggestions For You</div>
                            <div className='all'>See All</div>
                        </div>
                        <div className="right-users">
                            <ProfileIcon />
                            <div className="right-name">
                                <span>p.m.t.10.03</span>
                                <div>Mạnh Tuấn</div>
                            </div>
                            <div className="switch">Switch</div>
                        </div>
                    </div>
                    <div className="more">
                        <ul className="more-title">
                            <li className='more-item'>About</li>
                            <li className='more-item'>Help</li>
                            <li className='more-item'>Press</li>
                            <li className='more-item'>API</li>
                            <li className='more-item'>Jobs</li>
                            <li className='more-item'>Privacy</li>
                            <li className='more-item'>Tems</li>
                        </ul>
                        <span className='span'> © 2022 INSTAGRAM FROM META</span>
                        
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default PageHome