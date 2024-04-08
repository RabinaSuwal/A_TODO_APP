import {useState} from 'react'
import CheckboxList from './CheckboxList'

export default function TodoList({todos, setTodos}) {
  const handleDelete = (todoToDelete) =>{
    const updatedTodos = todos.filter(todo => todo !== todoToDelete);
    setTodos(updatedTodos);
  }

  return (
    <div> 
      
      <div className="showItems pt-4">
        <ul>
          {todos.map((todo, index) => (
            <CheckboxList key={index} todo={todo} onDelete={handleDelete}/>
          ))}
        </ul>
      </div>
   
    </div>
  )
}
