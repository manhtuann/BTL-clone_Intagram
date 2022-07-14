import React from 'react'
import '../footer/index.css'

function Footer() {
    const arr = [
        'Meta','About','Blog','Jobs','Help','API','Privacy','Terms','Top Account','Hashtags','Location','Instagram Lite','Contact Uploading & Non-Users'
    ]
    return (
        <>
            <div className="footer-container">
                <div className="footer-end">
                    <ul className='footer-items'>
                        {arr.map((item,index) => (
                            <li key={index} className='footer-item'>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="footer-languge">
                    <div className="languge">English
                    <svg aria-label="Down chevron icon" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path></svg></div>
                    <div className="meta">© 2022 Instagram from Meta</div>
                </div>
            </div>
        </>
    )
}

export default Footer