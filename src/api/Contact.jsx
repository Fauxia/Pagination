import React from 'react'
import { useParams } from 'react-router-dom'

function Contact() {
  let {category,id} = useParams()
  return (
    <div>
        <h1>Contact page - {category}{ id}</h1>
    </div>
  )
}

export default Contact