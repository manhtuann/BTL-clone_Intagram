import React from 'react'
import Navbar from '../Navbar'
import './chat.css'
import Profile from '../Home/Profile'
import { ReactComponent as Phone } from "./img/phone.svg";
import { ReactComponent as FaceTime } from "./img/facetime.svg";
import { ReactComponent as View } from "./img/view.svg";
import Input from './input';


function Chat() {
    return (
        <>
            <Navbar />
            <div className=' mess'>
                <div className="home-wrap">
                    <div className="mess-wrap">
                        <div className="mess-left">
                            <div className="mess-title">
                                <h1>p.m.t.03.1</h1>
                            </div>
                            <Profile iconSize='big' caption='active now'chatName='name-title'/>
                            <Profile iconSize='big' chatName='name-title'/>
                            <Profile iconSize='big' chatName='name-title'/>
                        </div>
                        <div className="mess-right">
                            <div className="mess-name">
                                <Profile className='mess-chat' iconSize='small'/>
                                <div className="mess-icon">
                                    <Phone className='icons'/>
                                    <FaceTime className='icons'/>
                                    <View className='icons'/>
                                </div>
                            </div>
                            <Input />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat