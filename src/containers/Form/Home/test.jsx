import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import CardMenu from './CartMenu'
import Profile from './Profile'
import "../Home/Newfeed/nf.css"
import Comment from './comment'

const GET_LIST_POST = gql`
    query GetListPost($pagination: PaginationInput, $condition: GetListPostCondition) {
        getListPost(pagination: $pagination, condition: $condition) {
            data {
            title
            medias {
                filename
                mimetype
                fileCategory
            }
    }
}
}
    `
function Test(props) {
    const {
        storyBorder,
        likedByText,
        likedByNumber,
        hours,
    } = props;
    const [pagination, setPagination] = useState({})
    const [condition, setCondition] = useState({})

    const [input,setInput] = useState([])


    const { loading, data } = useQuery(GET_LIST_POST, {
        variables: {
            pagination: pagination,
            condition: condition
        }
    })
    if (loading) return <p>loadingg...</p>
    const result = data?.getListPost.data;
    return (
        <>
            {result.map(item => (
                <div className="wrappp">
                    <Profile iconSize='medium' storyBorder={storyBorder} />
                    {
                        item.medias.map((img, index) => (
                            <div key={index} className="nf-img">
                                <img src={`http://localhost:5000/${img.filename}`} alt="" />
                            </div>

                        ))
                    }
                    <CardMenu />
                    <div className="wrap-nf">
                        <div className="user-like">
                            <Profile iconSize='small' hideAccountName='true' />
                            Liked by <strong> {likedByText} </strong>  and{" "}  <strong>{likedByNumber} orthers</strong>
                        </div>
                        <div className="caption">
                            {item.title}
                        </div>

                        <div className="time">{hours} day ago</div>
                        {input.map((item,index) => (
                            <li key={index}> <span className='name-cmt'>{likedByText}</span> {item}</li>
                        ))}
                        <div className="comment">
                            <svg aria-label="Emoji" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                            <Comment setInput={setInput}/>
                            
                        </div>
                    </div>
                </div>
            ))}



        </>
    )
}

export default Test