import React from "react";
import Anime from "../public_img/anime2.jpg"
import Html from '../public_img/html.png'
import Css from '../public_img/css.png'
import Dbms from '../public_img/dbms.png'
import Js from '../public_img/js.png'
import Python from '../public_img/python.png'
import light from '../public_img/light.png'
import '../style/Skills.css'

function Skills() {
    return (
        <div className="sec_div1" id="sec_div1">
            <div className="sec_div11">
                <img src={Anime} className="anime2" alt="Anime" />
            </div>
            <div className="sec_div12">
                <h1 className="sec_div121">What I do</h1>
                <p className="sec_div122">CRAZY WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                <div className="sec_div123">
                    <img className="skill_img" src={Html}  alt="HTML" />
                    <img className="skill_img" src={Css}  alt="CSS" />
                    <img className="skill_img" src={Js}  alt="JavaScript" />
                    <img className="skill_img" src={Dbms}  alt="DBMS" />
                    <img className="skill_img" src={Python}  alt="Python" />
                </div>
                <div className="sec_div124">
                    <li><img src={light} height="25px" className="spark" /> Develop highly interactive Front end/User Interface for your website</li>
                    <li><img src={light} height="25px" className="spark" /> Progressive Web Application (PWA) in normal and SPA Stack</li>
                    <li><img src={light} height="25px" className="spark" /> Integration of Third party services such as Firebase/AWS/Digital Ocean</li>
                </div>
            </div>
        </div>
    );
}

export default Skills;