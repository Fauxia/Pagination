import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { changeClr } from './Slice'

function Counter() {
    let [clr,setClr] = useState('black')
    let sel = useSelector(n=>n.humnava.color)
    let dis = useDispatch()
  return (
    <div>
        <h1 style={{color: sel, fontSize: '2rem'}}>Color name</h1>
        <input type="text" placeholder='Enter color here' onChange={e=>setClr(e.target.value)} />
        <button style={{fontSize:'2rem'}} onClick={()=>dis(changeClr(clr))}>Change color</button>
    </div>
  )
}

export default Counter