import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navigation() {
  let sel = useSelector(n=>n.prode)
  return (
    <ul className='nav-link'>
       <li><NavLink to="/" style={({isActive})=>{return {color: isActive ?'yellow':''}}}>Home</NavLink></li> 
       <li><NavLink to="/about" style={({isActive})=>{return {color: isActive ?'yellow':''}}}>About</NavLink></li> 
       <li><NavLink to="/contact/anil/1" style={({isActive})=>{return {color: isActive ?'yellow':''}}}>Contact</NavLink></li> 
       <li><NavLink to="/contact/kapoor/2" style={({isActive})=>{return {color: isActive ?'yellow':''}}}>KAPOOR</NavLink></li> 
       <li><NavLink to="/login" style={({isActive})=>{return {color: isActive ?'yellow':''}}}>Login</NavLink></li> 
       <li><NavLink to="/sign" style={({isActive})=>{return {color: isActive ?'yellow':''}}}>Sign</NavLink></li> 
       <li><NavLink to="/cart" style={({isActive})=>{return {color: isActive ?'yellow':''}}}>My bag{sel.length}</NavLink></li> 
    </ul>
  )
}

export default Navigation