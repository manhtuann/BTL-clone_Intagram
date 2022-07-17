import './index.css'

function Stories() {
    const data = [
    {
        id: 1,
        name: 'pinky.store',
        img: "./img/htmcss.jpg"
    },
    {
        id: 2,
        name: 'ielts_izone',
        img: "./img/htmcss.jpg"
    },
    {
        id: 3,
        name: 'hml_css_js',
        img: "./img/htmcss.jpg"
    },
]
    return (
        <div className='str-container'>
            <div className="stories">
                {data.map((item,index) => (
                    <div className="storie" key={index}>
                        <div className="img"></div>
                        <div className="stories-name">
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stories