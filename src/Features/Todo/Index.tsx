import React from 'react'
import Index_Present from './Index_Present';
import TodoItemList from './Components/TodoItemList';

export default function Index() {
    let { values, onChange, handleClick } = Index_Present();

    return (
        <div>
            <div>
                <button onClick={handleClick}>Add todo</button>
                <div>
                    <input type="text"
                        value={values.NewTodoText}
                        name="NewTodoText"
                        onChange={onChange} />
                </div>
            </div>
            <h1>Todo list</h1>
            <TodoItemList
                onChange={onChange}
                todos={values.todos}></TodoItemList>
        </div>
    );
}
