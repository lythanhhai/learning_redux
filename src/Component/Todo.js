import React from 'react' 
import { useState } from 'react'

const Todo = () => {
    const [value, setValue] = useState("")
    return(
        <div className="todo">
            <input type="text" value={value} placeholder="Enter a todo..." onChange={(e) => setValue(e.target.value)} />
            <button className="btnAdd">Add</button>
        </div>
    )
}

export default React.memo(Todo)