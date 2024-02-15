import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import '../App.css'
import {delet} from './ProdSlice'

const Cart = () => {
  let dis = useDispatch()
  let sel = useSelector(st=>st.prode)
  const cards = sel.map((prod) => (
    <div className="ui">
      <div>
        <img src={prod.image} alt="" />
      </div>
      <h2>{prod.title}</h2>
      <p>${prod.price}</p>
      <button onClick={()=>dis(delet(prod.id))}>Remove from Cart</button>
    </div>
  ))
  return (
    <div className='name'>
      {cards}
    </div>

  )
}

export default Cart