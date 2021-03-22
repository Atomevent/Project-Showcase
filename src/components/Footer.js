import React from 'react'
import Github from "../icon/github.png"
const Footer = () => {
    return (
        <div className="footer flex">
            <div className="flex-column text-white">
                <h4>Copyright &copy; By</h4>
                <h4>Vasuphol Atharyuthi</h4>
            </div>
            <div className="flex">
                <a href="https://github.com/Atomevent"><img src={Github} alt="Github"></img></a>
            </div>
        </div>
    )
}

export default Footer
