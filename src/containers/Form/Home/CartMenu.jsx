import { ReactComponent as Like } from "./image/like.svg";
import { ReactComponent as Comments } from "./image/comment.svg";
import { ReactComponent as Share } from "./image/share.svg";
import { ReactComponent as Bookmark } from "./image/bookmark.svg";
import { ReactComponent as Heart } from "./image/heart.svg";

import './Newfeed/nf.css'
import { useState } from "react";

function CardMenu() {
    const [icon,setIcon] = useState(true)
    function handleIcon(){
        setIcon(!icon)
    }
    return (
        <div className="nf-icon">
            <div className="nf-like">
                <div onClick={handleIcon}>
                    {icon ? <Like className="items" />: <Heart className="items" />}
                </div>
                <Comments className="cmt items" />
                <Share className="like items" />
            </div>
            <Bookmark className="save" />
        </div>
    );
}

export default CardMenu;