import React, { useReducer } from 'react'
let initialState = []
let objTODOS = {
  add:'add',
  delete:'delete',
  reset:'reset'
}

function Comp() {
  function reducer(state,action){
    switch(action.type){
      case objTODOS.add:
        return [
          ...state,
          {
            id:state.length+1,
            name:action.payload
          }
        ]
        case objTODOS.delete:
          return state.filter(n=>n.id !== action.payload)
      }
      return state
  }
  let [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div className='comp'>
      <input type="text" onBlur={e=>dispatch({type:objTODOS.add,payload:e.target.value})}/>
      {state.map(e=><li key={e.id}>{e.name}
          <button onClick={()=>dispatch({type:objTODOS.delete,payload:e.id})}>DELETE</button>
        </li>)}
    </div>
  )
}

export default Comp