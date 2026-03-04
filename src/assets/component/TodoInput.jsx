import { useState } from 'react'

function TodoInput({addTodo}) {

    const onAdd = () => {
        addTodo(text)
        setText('')
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && text.length > 0) {
            onAdd()
        }
    }

    const [text,setText]= useState("")
    return(
        <div className='input-section'>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What needs to be done?"
            />
            <button onClick={onAdd} disabled={text.length === 0}>Add</button>
        </div>
    )
}
export default TodoInput;