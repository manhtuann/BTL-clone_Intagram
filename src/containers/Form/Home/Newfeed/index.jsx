
import Test from '../test';

import './nf.css'

function NewFeed(props) {
    const {
        storyBorder,
        likedByText,
        likedByNumber,
        hours,
    } = props;
    return (
        <div className='newfeed-container'>
            <Test likedByText= {likedByText} likedByNumber={likedByNumber} hours={hours}/>
        </div>
    )
}

export default NewFeed