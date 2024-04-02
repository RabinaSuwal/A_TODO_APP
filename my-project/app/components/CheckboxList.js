import React, { useState } from 'react'


export default function CheckboxList({todo}) {
    const[checked, setChecked] = useState(false);


    const handleCheckbox = () =>{
        setChecked(!checked);
    }
  return (
    <div>
      <li>
        <input type="checkbox" checked={checked} onChange={handleCheckbox} />

        {todo}

      </li>
    </div>
  )
}
