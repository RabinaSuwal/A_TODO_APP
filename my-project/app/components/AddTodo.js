"use client";
import { useState } from 'react';

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
      <div>
         <form onSubmit={handlesubmit} className="relative w-full">
            <input type="text" placeholder='Enter your Todos' onChange={(e)=>setTodo(e.target.value)} value={todo} 
            className='mt-1 block w-full px-3 py-2 pr-20 border border-black rounded-md shadow-sm focus:outline-none
            focus:ring-indigo-500'
            />
            <button type="submit" 
            className='absolute inset-y-0 right-0 px-4 py-2 bg-indigo-400 text-white rounded-r-md hover:bg-indigo-700
            focus:outline-none focus:ring-2 focus:ring-indigo-400'>ADD</button> 
         </form>
        </div>   
      
    )
}
export default AddTodo
