import React from "react";
import github from '../public_img/github.png'
import linkedin from '../public_img/linkedin.png'
import google from '../public_img/google.png'
import facebook from '../public_img/facebook.png'
import anime from '../public_img/anime.jpg'
import hi from '../public_img/hi.png'
import '../style/Header.css'

function Header(){
    
    return(
        <>
            <div className="head1" id="head1">
            <div className="intro">
                <h1 className="intro_head">Hi all, I'm Akshay <img src={hi}  className="hii" /></h1>
                <div
                className="intro_all">

                <p className="intro_para">Dedicated and innovative web developer with a fervent commitment to crafting immersive digital experiences. Proficient in a range of languages and frameworks, specializing in front-end development with a keen eye for design and usability. Constantly seeking to push boundaries and deliver solutions that captivate and engage users.</p>
                <div className="media">
                <a className="social_media" href="https://github.com/akahayt121"><img src={github} alt="git_id" height={30} /></a>
                <a className="social_media" href="https://www.linkedin.com/in/akshay-tiwari-6257282b7/"><img src={linkedin} alt="linkedin_id" height={30} /></a>
                <a className="social_media" href="mailto:akshaytiwari2410@gmail.com"><img src={google} alt="mail me" height={30}/></a>
                <a className="social_media" href="https://facebook.com/akahayt121"><img src={facebook} alt="facebookId" height={30} /></a>
                </div>
                </div>
            </div>
            <div className="pic">
                <img src={anime} className="anime1"/>
            </div>
            </div>
        </>
    )
}
export default Header;