import "./WorkCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="me"/> {/* img 태그에 닫는 것이 없는 이유는 사이공간에 텍스트등의 기타정보가 안들어가서 */}
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <NavLink to={props.view} className="btn">
                    View
                </NavLink>
                <NavLink to="url.com" className="btn">
                    Source
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkCard