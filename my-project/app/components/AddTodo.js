"use client";
import React,{useState} from 'react'

const AddTodo = () => {
    const[todo, setTodo] = useState("");

    const[todos, setTodos] = useState([]);
  
     const handlesubmit = (e) =>{
      e.preventDefault();
      if(!todo){
  
      }
      else{
        setTodos([...todos, todo]);
        setTodo('');
      }}
       
  
    return (
      <div>
        <div>
         <form>
          <input type="text" placeholder='Enter ToDo' onChange={(e)=>setTodo(e.target.value)} value={todo} />
          <button type="submit" onClick={handlesubmit}>ADD</button>
         </form>
        </div> 
  
          <div className='showItems'>
         
          {todos.map((todo, index) => {
            return(
            <li key={index}>{todo}</li>)
          })}
         </div>  
      </div>
    )
}

export default AddTodo
