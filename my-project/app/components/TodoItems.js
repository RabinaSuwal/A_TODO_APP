import React from 'react'

export default function TodoItems({todos}) {

  return (
    <div>
      <div className='showItems'>
         <ul>
         {todos.map((todo, index) => {
           return(
           <li key={index}>{todo}</li>
           )
         })}
         </ul>
        </div> 
    </div>
  )
}
