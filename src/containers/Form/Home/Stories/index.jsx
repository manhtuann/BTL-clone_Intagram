
import ProfileIcon from '../ProfileIcon'
import './index.css'
import users from '../data/users'

function Stories() {
    let accountName = users[Math.floor(Math.random() * users.length)].username;

    if (accountName.length > 10) {
        accountName = accountName.substring(0, 10) + "...";
    }
    return (
            <div className="wrap-story">
                    <ProfileIcon iconSize='big' storyBorder={true}/>
                    <span className="stories-name">{accountName}</span>
            </div>
        
    )
}

export default Stories