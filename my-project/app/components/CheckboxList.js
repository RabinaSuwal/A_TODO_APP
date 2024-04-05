import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} className='cursor-pointer text-red-500 hover:text-red-600'/>
      </li>
    </div>
  )
}
