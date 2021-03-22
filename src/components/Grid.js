import Showcase from "./Showcase";
import * as textShowcase from "../text/text.js" 
import * as headerShowcase from "../text/header.js" 
import * as usingShowcase  from  "../text/using.js" 
import React from 'react'
import fibonanci from "../vid/fibonanci.mp4"
import typetest from "../vid/typetest.mp4"
import snakegame from "../vid/snakegame.mp4"
import Shopping from "../img/Shopping-Website.png"
import Hotel from "../img/hotelRent.png"
import Nodejs from "../icon/nodejs.png"
import Python from "../icon/python.png"
import Pygame from "../icon/pygame.png"
import Java from "../icon/Java.png"
import JavaFX from "../icon/JavaFX.png"
import ReactLG from "../icon/React.png"
import Redux from "../icon/redux.png"

const Grid = (props) => {

    return (
        <div className = "main-grid">
            <Showcase txtside="left" video="true" vid={fibonanci} txt={textShowcase.fibonanci} header={headerShowcase.fibonanci}
            using1={usingShowcase.node} img1={Nodejs} hasLink={false} gitLink={"https://github.com/Atomevent/Fibbonanci"}>
            </Showcase>
            <Showcase txtside="right" video="true" vid={typetest} txt={textShowcase.typetest}  header={headerShowcase.typetest}
            using1={usingShowcase.java} img1={Java} using2={usingShowcase.javaFX} img2={JavaFX} hasLink={false}
            gitLink={"https://github.com/Atomevent/TypeTest"}>
            </Showcase>
            <Showcase txtside="left" video="true"  vid={snakegame} txt={textShowcase.snakegame} header={headerShowcase.snakegame}  
            using1={usingShowcase.python} img1={Python} 
            using2={usingShowcase.pygame} img2={Pygame} 
             hasLink={false} gitLink={"https://github.com/Atomevent/Snake-Game"}>
            </Showcase>
            <Showcase txtside="right" imgSrc={Shopping} txt={textShowcase.shopping}  header={headerShowcase.shopping}
            using1={usingShowcase.react} img1={ReactLG} hasLink={true} 
            LinkTo={"https://epic-elion-c3b678.netlify.app/"} gitLink={"https://github.com/Atomevent/Shopping-website"}>
            </Showcase>
            <Showcase txtside="left" imgSrc={Hotel} txt={textShowcase.hotelRent}  header={headerShowcase.hotelRent}
            using1={usingShowcase.react} img1={ReactLG} 
            using2={usingShowcase.redux} img2={Redux}
            hasLink={true} 
            LinkTo={"https://friendly-stonebraker-948e55.netlify.app/"} gitLink={"https://github.com/Atomevent/Hotel-Rent-Website"}>
            </Showcase>
        </div>
    )
}

export default Grid
