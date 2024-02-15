import React from "react";
import { useNavigate ,Link, Outlet} from "react-router-dom";

function Login() {
    let data = {
        name:'husnain',
        age:20
    }
    let nav = useNavigate()
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={()=>nav('/sign',{state:data})}>Click me</button>
      <Link to='nested'>GO TO THIS PAGE</Link>
      <Outlet/>
    </>
  );
}

export default Login;
