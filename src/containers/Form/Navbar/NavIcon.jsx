import { ReactComponent as Home } from "./img/home.svg";
import { ReactComponent as Mess } from "./img/mess.svg";
import { ReactComponent as NewFeed } from "./img/newfeed.svg";
import { ReactComponent as LaBan } from "./img/laban.svg";
import { ReactComponent as Heart } from "./img/heart.svg";



function NavIcon() {
    return (
        <>
            <li className="item"><Home /></li>
            <li className="item"><Mess /></li>
            <li className="item"><NewFeed /></li>
            <li className="item"><LaBan /></li>
            <li className="item"><Heart /></li>
        </>


    );
}

export default NavIcon;