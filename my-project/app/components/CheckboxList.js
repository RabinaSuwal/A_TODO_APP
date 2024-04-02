import React, { useState } from 'react'

export default function CheckboxList() {
    const[checked, setChecked] = useState();

    const handleCheckbox = () =>{
        setChecked(!checked);
    }
  return (
    <div>
      <li>
        <input type="checkbox" checked={checked} onChange={handleCheckbox} />
      </li>
    </div>
  )
}
