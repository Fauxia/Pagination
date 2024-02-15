import React from 'react'
import { useLocation } from 'react-router-dom'

function SignUp() {
    let loc = useLocation()
    console.log(loc);
  return (
    <>
    <h1>SignUp</h1>
    <p>{loc.state ? `${loc.state.name} just Logged in` : ''} </p>
    </>
  )
}

export default SignUp