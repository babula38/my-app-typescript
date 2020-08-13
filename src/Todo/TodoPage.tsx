import React from 'react'
import { useTodoPage_Present } from './TodoPage_Present';


function TodoPage() {
    var { Message, handleClick } = useTodoPage_Present();
    
    return (
        <div>
            {Message}
            <button onClick={handleClick}>Click me to redirect</button>
        </div>
    )
}

export default TodoPage
