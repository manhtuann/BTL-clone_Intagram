import { useEffect } from 'react';
import '../Home/Newfeed/nf.css'
function ProfileIcon(props) {
    const { iconSize, storyBorder, image } = props;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomId = getRandomInt(1, 70);

    let profileImage = image
        ? image
        : `https://i.pravatar.cc/150?img=${randomId}`;

    return (
        <div className={storyBorder ? "user" : ""}>
            <img
                className={`profileIcon ${iconSize}`}
                src={profileImage}
                alt="profile"
            />
        </div>
    );
}

export default ProfileIcon;