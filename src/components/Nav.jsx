import React from "react";
import logo from '../public_img/logo.png';
import '../style/Nav.css';

function Nav(){
    function myFunction() {
        var x = document.getElementById("shortcuts")[0];
        if (x.className === "shortcuts") {
          x.className += " responsive";
        } else {
          x.className = "shortcuts";
        }
      }

    return(
        <>
            <nav className="upper_nav">
                <div className="logo">
                    <img className='logo_png' src={logo} alt="" />
                </div>
                <div className="shortcuts">
                    <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                        <i className="fa fa-bars"></i> 
                    </a>
                    <button onClick={() => document.getElementById('head1').scrollIntoView({ behavior: 'smooth' })} className="short_btn">Skills</button>
                    <button onClick={() => document.getElementById('sec_div1').scrollIntoView({ behavior: 'smooth' })} className="short_btn">Open Source</button>
                    <button onClick={() => document.getElementById('third_div1').scrollIntoView({ behavior: 'smooth' })} className="short_btn">Projects</button>
                    <button onClick={() => document.getElementById('four_div1').scrollIntoView({ behavior: 'smooth' })} className="short_btn">Contact me</button>
                    
                </div>
            </nav>
            
        </>
    )
}

export default Nav;
