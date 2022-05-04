import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeOne, clearTodo } from './features/todoSlice'

function Todo() {
    const items = useSelector((state) => state.todos.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const renderItems = items.map((item, index) => 
        <li     style={{marginLeft:"15em", textAlign:"left"}} 
                key={index} 
                onClick={() => dispatch(removeOne(index))}>
                    {item}</li>)

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit To-Do Item</button>
            </form>
            <button onClick={() => dispatch(clearTodo())}>Clear To-Do List</button>
            <br></br><br></br>
            <hr></hr>
            <ul>
                {renderItems}
            </ul>
        </div>
    )
}

export default Todo
