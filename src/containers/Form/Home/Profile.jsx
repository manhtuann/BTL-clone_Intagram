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
                </div>
            )}
        </div>
    );
}

export default Profile;