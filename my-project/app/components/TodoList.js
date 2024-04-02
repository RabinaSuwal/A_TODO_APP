import React from 'react'
import CheckboxList from './CheckboxList'


export default function TodoList({todos}) {

  return (
    <div>
      
      <div className="showItems">
        <ul>
          {todos.map((todo, index) => (
            <CheckboxList key={index} todo={todo}/>
          ))}
        </ul>
      </div>
   
    </div>
  )
}
