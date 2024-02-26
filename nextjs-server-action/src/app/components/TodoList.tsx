import React from 'react'
import TodoItem from './TodoItem';

export type Todo = {
    userId: number,
    title: string,
    completed: boolean,
    id: number
}

// db.json에서 todo 데이터 가져오기.
async function fetchTodos() {
    try {
        const res = await fetch("http://localhost:3001/todos");
        const todo: Todo[] = await res.json();
        return todo;
    } catch(error) {
        if(error instanceof Error) {
            console.log(error.stack);
        }
    }
}

// 가져온 데이터로 UI 보여주기.
const TodoList = async () => {
    const todos = await fetchTodos();
    let content;

    if(!todos || todos.length === 0){
        content = <p>Todo 리스트가 없습니다.</p>
    }else {
        const sortedTodos = todos.reverse();

        content = (
            <>
            {sortedTodos.map((todo) => (
                <TodoItem key={todo.id} {...todo}/>
            ))} 
            </>
        )
        return content;
    }
}

export default TodoList