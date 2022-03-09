import React from 'react' 
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../Redux_Todo/action'


const Todo = () => {
    const [value, setValue] = useState("")
    const todos = useSelector(state => state.reducerTodo).todos
    const dispatch = useDispatch()
    return(
        <div className="todo">
            <input type="text" value={value} placeholder="Enter a todo..." onChange={(e) => setValue(e.target.value)} />
            <button className="btnAdd" onClick={() => {dispatch(action(value))}}>Add</button>
            {
                todos.map((todo, index) => {
                     return(
                         <li key={index}>{todo}</li>
                     )
                 })
            }
        </div>
    )
}

export default React.memo(Todo)