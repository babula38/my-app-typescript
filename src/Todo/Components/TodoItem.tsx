import React from 'react'

interface ITodoItem {
    message: string
}

export default function TodoItem({ message }: ITodoItem) {
    return (
        <div>
            Todo item {message}
        </div>
    )
}
