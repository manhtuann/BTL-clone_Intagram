import { ReactComponent as Like } from "./image/like.svg";
import { ReactComponent as Comments } from "./image/comment.svg";
import { ReactComponent as Share } from "./image/share.svg";
import { ReactComponent as Bookmark } from "./image/bookmark.svg";
import './Newfeed/nf.css'

function CardMenu() {
    return (
        <div className="nf-icon">
            <div className="nf-like">
                <Like className="share items" />
                <Comments className="cmt items" />
                <Share className="like items" />
            </div>
            <Bookmark className="save" />
        </div>
    );
}

export default CardMenu;