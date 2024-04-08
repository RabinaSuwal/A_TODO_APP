"use client";
import { useState } from "react";

const AddTodo = (addTodo) => {
    const[todo, setTodo] = useState("");

     const handlesubmit = (e) =>{
      e.preventDefault();
      if(!todo){}
      else{
       addTodo(todo);
       setTodo('');}
      }
       
    return (
      <div>
         <form onSubmit={handlesubmit}>
          <input type="text" placeholder='Enter ToDo' onChange={(e)=>setTodo(e.target.value)} value={todo} />
          <button type="submit">ADD</button>
         </form>   
      </div>
    )
}

export default AddTodo
