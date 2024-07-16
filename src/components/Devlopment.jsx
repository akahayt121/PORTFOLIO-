import React from "react";
import graphImage from '../public_img/graph.png'
import animeGif from '../public_img/anime3.gif'
import '../style/Devlopment.css'

const Devlopment = () => {
    return (
      <div className="third_div1" id="third_div1">
        <div className="third_div11">
          <h1>Proficiency</h1>
          <img src={graphImage} alt="Graph" className="images31" />
        </div>
        <div className="third_div12">
          <img src={animeGif} alt="Anime GIF" className="images32" />
        </div>
      </div>
    );
  };
  
  export default Devlopment;