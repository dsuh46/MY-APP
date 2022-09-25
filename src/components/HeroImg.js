import "./HeroImgStyles.css"

import React from 'react'

import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        <div className="top">
          <h1>-서동우-</h1>
        </div>
        <div className="middle">
          <h2>개발 <span className="no-wrap">포트폴리오</span></h2>
        </div>
        <div className="btn_area">
            <Link to ="/project" className="btn">Projects</Link>
            <Link to ="/contact" className="btn btn-light">About ME</Link>
        </div>
    </div>
  </div>
};

export default HeroImg