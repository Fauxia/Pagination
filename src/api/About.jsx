import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchTodos } from '../slice/SliceTodo'

function About() {
  let dis = useDispatch()
  let sel = useSelector(state=>state.redic)
  console.log('state',sel);
  if(sel.isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <div>
        <h1>About page</h1>
        <button onClick={()=>dis(fetchTodos())}>Fetch the data</button>
        {sel.data && sel.data.map(n=> <li>{n.title}</li>)}

    </div>
  )
}

export default About