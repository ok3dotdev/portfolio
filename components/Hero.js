import React from 'react'


function Hero() {
    return (
        <section className="hero">
            <div className="image">
            <img src="/photo.png" className='hero-image' alt="my_image" width={120} height={120}/>
            </div>
            <h1 className="title">Web designer & developer</h1>
            <p className="description">Hello! my name is Henry Oke, I’m a self-taught web developer and occasional designer currently based in Toronto CA. My role as a developer is to help my clients build websites and web-based applications to meet business goals. Do you have a project in mind? Let’s work!</p>
            <button className="contact">Hire me</button>
            <div className="scroll_icon">
                <span className='circle'></span>
            </div>
            
        </section>
    )
}

export default Hero
