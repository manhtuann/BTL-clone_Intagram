import './Newfeed/nf.css'
import ProfileIcon from "./ProfileIcon";
import users from "./data/users";

function Profile(props) {
    const {
        username,
        caption,
        iconSize,
        captionSize,
        storyBorder,
        hideAccountName,
        image,
    } = props;

    let accountName = username
        ? username
        : users[Math.floor(Math.random() * users.length)].username;

    return (
        <div className="users">
            <ProfileIcon
                iconSize={iconSize}
                storyBorder={storyBorder}
                image={image}
            />
            {(accountName || caption) && !hideAccountName && (
                <div className="textContainer">
                    <div className="wrap-text">
                    <span className="newfeed-name">{accountName}</span>
                    <span className={`caption ${captionSize}`}>{caption}</span>
                    </div>
                    {/* <div className="more-nf">
                        <svg aria-label="More options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle>
                        </svg>
                    </div> */}
                </div>
            )}
        </div>
    );
}

export default Profile;