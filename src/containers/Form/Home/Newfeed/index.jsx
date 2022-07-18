import CardMenu from '../CartMenu'
import Profile from '../Profile'
import './nf.css'

function NewFeed(props) {
    const {
        storyBorder,
        image,
        comments,
        likedByText,
        likedByNumber,
        hours,
    } = props;
    return (
        <div className='newfeed-container'>
            <Profile iconSize='medium' storyBorder={storyBorder} />
            <div className="nf-img">
                <img src="https://images.unsplash.com/photo-1644982652061-df82282e178d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <CardMenu />
            <div className="wrap-nf">
                
                <div className="user-like">
                    <Profile iconSize='small' hideAccountName='true'/>
                    Liked by <strong>{likedByText}</strong>  and  <strong>{likedByNumber} orther</strong>
                </div>
                <div className="caption">
                    pinky.store.dn #feedback khách mang đỉnh của chóp cả nhà ơi 💯💯. Áo nhà e mang đôi đẹp nhứt nách 🤣
                </div>
                <div className="time">1 day ago</div>
                <div className="comment">
                    <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                    <input type="text" placeholder='Add a comment' />
                    <button>Post</button>
                </div>
            </div>
        </div>
    )
}

export default NewFeed