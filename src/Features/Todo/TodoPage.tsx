import React from 'react'
import { useTodoPage_Present, TodoModel } from './TodoPage_Present';
import nameOf from '../../Utility/Extensions/nameOf';


function TodoPage() {
    var { values, Message, handleClick, onChange, onBlur } = useTodoPage_Present();

    return (
        <div>
            {Message}
            <br />
            {values.cool}
            <br />
            Input here
            <input name="cool"
                type="text"
                onChange={onChange}
                onBlur={onBlur}
            />
            <br></br>
            <span>With dropdown</span>
            <select name={nameOf<TodoModel>("testDrop")} value={values.testDrop} onChange={onChange}>
                <option value="drop1">drop1</option>
                <option value="drop2">drop2</option>
                <option value="drop3">drop3</option>
            </select>
            <br></br>
            <span>With radio button</span>
            <span>Selected radio button value <span style={{ color: "red" }}>{values.gender}</span></span>
            <div>
                <input type="radio" id="male"
                    name={nameOf<TodoModel>("gender")}
                    onChange={onChange}
                    checked={values.gender == "male"}
                    value="male" />
                <label>Male</label><br />
                <input type="radio" id="female"
                    name={nameOf<TodoModel>("gender")}
                    onChange={onChange}
                    checked={values.gender == "female"}
                    value="female" />
                <label>Female</label><br />
                <input type="radio" id="other"
                    name={nameOf<TodoModel>("gender")}
                    onChange={onChange}
                    checked={values.gender == "other"}
                    value="other" />
                <label>Other</label>
            </div>
            <br />
            <button onClick={handleClick}>Click me to redirect</button>
        </div>
    )
}

export default TodoPage
