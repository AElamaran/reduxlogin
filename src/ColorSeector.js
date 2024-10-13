import { useState } from "react"
import React  from 'react'
import { useDispatch } from "react-redux"
import{changeColor} from './features/theme'


const ColorSeector = () => {
    const [color,setColor]=useState('black')
    const dispatch = useDispatch()
  return (
    <div>
        <input
            type='color'
            value={color}
            onChange={e => setColor(e.target.value)} 
            style={{ marginRight: '10px' }} // Corrected style syntax
        />
        <button onClick={()=>dispatch(changeColor(color))}>Change Color</button>
    </div>
  )
}

export default ColorSeector