import React from 'react'
interface item {
    todos: any[],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TodoItemList({ todos, onChange }: item) {
    return (
        <>
            {todos.map(item => {
                return (
                    <div>
                        <input type="checkbox"
                            id="vehicle1"
                            key={item.id}
                            name="vehicle1"
                            value={item.name}
                            onChange={onChange} />
                        <label htmlFor="vehicle1">{item.name}</label><br />
                    </div>
                );
            })}
        </>
    )
}
