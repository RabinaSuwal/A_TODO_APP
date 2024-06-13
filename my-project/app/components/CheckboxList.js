import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

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
      <li className='flex items-center justify-between  px-4 py-2 rounded-md text-gray-900'>
        <div className="flex items-center space-x-2">
          <input type="checkbox" checked={checked} onChange={handleCheckbox} 
          className='w-4 h-4'
          />
          {todo}
        </div>
        <button onClick={handleDelete} className='cursor-pointer text-red-500 hover:text-red-600 pl-24'><FaTrash /></button>
      </li>
    </div>
  )
}
