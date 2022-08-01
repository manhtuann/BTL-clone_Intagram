import React from 'react'
import Profile from '../Home/Profile'

function CreateNewPost() {
    return (
        <>
            <div className="container-post">
                <div className="titles">
                    <div className="post-title">Tạo bài viết</div>
                    <div className="close"> X</div>
                </div>
                <Profile />
                <input type="text" placeholder='bạn đang nghĩ gì thế?' />
            </div>
        </>
    )
}

export default CreateNewPost