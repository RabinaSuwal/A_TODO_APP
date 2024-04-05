"use client";
import React,{useState} from 'react'

const AddTodo = ({addTodo}) => {
    const[todo, setTodo] = useState("");

     const handlesubmit = (e) =>{
      e.preventDefault();
      if(!todo){}
      else{
       addTodo(todo);
       setTodo('');}
      }
       
  
    return (
      <div className='border border-black'>
         <form onSubmit={handlesubmit}>
          <input type="text" placeholder='Enter ToDo' onChange={(e)=>setTodo(e.target.value)} value={todo} />
          <button type="submit" className='bg-slate-500 text-white'>ADD</button>
         </form>   
      </div>
    )
}

export default AddTodo
