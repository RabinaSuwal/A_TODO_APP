import React, { useState } from 'react'
import {FaTrash} from 'react-icons/fa'

export default function CheckboxList({todo, onDelete}) {
    const[checked, setChecked] = useState(false);

    const handleCheckbox = () =>{
        setChecked(!checked);
    }

    const handleDelete = () =>{
        onDelete(todo);
    }
  return (
    <div>
      <li>
        <input type="checkbox" checked={checked} onChange={handleCheckbox} />
        {todo}
        <button onClick={handleDelete} className='cursor-pointer text-red-500 hover:text-red-600'><FaTrash /></button>
      </li>
    </div>
  )
}
