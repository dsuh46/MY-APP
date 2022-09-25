import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input tpye="text"></input>
            <label>Email</label>
            <input tpye="email"></input>
            <label>Subject</label>
            <input tpye="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form