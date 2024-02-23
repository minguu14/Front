import React from 'react'
import { Todo } from './TodoList'
import Link from 'next/link'

const TodoItem = (todo: Todo) => {
  return (
    <form className='my-4 flex justify-between'>
        <label htmlFor='completed' className='text-2xl hover:underline'>
            <Link href={`/edit/${todo.id}`}>
                {todo.title}
            </Link>
        </label>
        <div className='flex items-center gap-4'>
            CheckBox
            <button>X</button>
        </div>
    </form>
  )
}

export default TodoItem