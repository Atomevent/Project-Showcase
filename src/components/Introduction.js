import React from 'react'

const Introduction = (props) => {
    const scrollTo = ()=>{
        console.log( props.reffers)

    }
    
    
    return (
        <div className="flex-column page introduction">
            <div className="header-pos flex-column">
                <h2 className="first-header">Project Showcase</h2>
                <div className="line"></div>
                <p>Vasuphol Atharyuthi</p>
                <a href="#here"><button>See More</button></a>
            </div>
        </div>
    )
}

export default Introduction
