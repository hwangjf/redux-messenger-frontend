import React from 'react'

const Signup = () => {
// WANT TO CONSOLE LOG PROPS //
  return (
    <div className="signup">
      <form className="form signup__form">
        <input className="input signup__input" type="text" required></input>
        <input className="input signup__input" type="password" required><></input>
        <button className="btn btn__medium">Signup</button>
      </form>
    </div>
  )
}

export default Signup