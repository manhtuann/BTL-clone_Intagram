import React from 'react'
import '../posts/index.css'

function Posts() {
    const data = [
        {
            id:1,
            img: 'https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id:2,
            img:'https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id:3,
            img:'https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id:4,
            img:'https://images.unsplash.com/photo-1657396643904-006f5434e352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id:5,
            img:'https://images.unsplash.com/photo-1657597725134-44be2242157c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
    ]
    return (
        <>
            <ul className='posts'>
            {data.map((post) => (
                <img className='post-item' src={post.img} key={post.id} alt="" />
            ))}
            </ul>
        </>
    )
}

export default Posts