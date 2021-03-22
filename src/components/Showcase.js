import React from 'react'
import {useRef,useEffect} from "react"
import Description from "./Description";
import ProjectHeader from "./ProjectHeader";
import {Link} from "react-router-dom"
import Github from "../icon/github.png"
import Play from "../icon/play.jpg"

const Showcase = (props) => {
    const checkvid = ()=>{
        if(props.video==="true"){
            return(<video autoPlay muted loop>
                <source src={props.vid}  type="video/mp4"/>
            </video>)
        }else{
            return (<img className= "showcase-image" src={props.imgSrc}></img>)
        }
    }
    const showcase = useRef();
    const checkdir = ()=>{
        if(props.txtside==="left"){
           showcase.current.classList.add("left-showcase")
        }else{
            showcase.current.classList.add("right-showcase")
        }
    }
    const checktxt = ()=>{
        if(props.using3){
        return (
            <div className="flex" >
                <div className="flex-column card">
                        <img src={props.img1}></img>
                        <h4 className="center">{props.using1}</h4>
                </div>
                <div className="flex-column card ">
                    <img src={props.img2}></img>
                    <h4 className="center">{props.using2}</h4>
                </div>
                <div className="flex-column card">
                    <img src={props.img3}></img>
                    <h4 className="center">{props.using3}</h4>
                </div>
            </div>)
            
        }
        else if(props.using2){
        return (<div className="flex" >
        <div className="flex-column card">
                <img src={props.img1}></img>
                <h4 className="center">{props.using1}</h4>
        </div>
        <div className="flex-column card ">
            <img src={props.img2}></img>
            <h4 className="center">{props.using2}</h4>
        </div>
        </div>)
        }
        else if(props.using1){
        return (<div className="flex" >
                    <div className="flex-column card">
                        <img src={props.img1}></img>
                        <h4 className="center">{props.using1}</h4>
                    </div>
                </div>)
        }
    }
    const checkLink = ()=>{
        if(props.hasLink){
            return (   <a href={props.LinkTo}><img src={Play}></img></a>)
        }
    }
    useEffect(() => {
       checkdir();
      },[]);
    return (
        <div ref={showcase} className="grid grid-showcase showcase">
            <div className="showcase-desc-text">
                <ProjectHeader header={props.header}/>
                <Description txt={props.txt}/>
                  {checktxt()}   
                    <div className="flex gitlink">
                        {checkLink()}
                        <a href={props.gitLink}><img src={Github}></img></a>
                      
                    </div>        
            </div>
           {checkvid()}  
        </div>
    )
}

export default Showcase
