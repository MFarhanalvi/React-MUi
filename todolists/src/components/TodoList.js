import React from 'react'
import Todo from './Todo'

const TodoList = ({todolist , deleteTodo, editTodo}) => {
  return (
    <div className='todolist'>
    <h3>Todolists</h3>
    {
        todolist.map((todo,i) => <Todo key={i} todo={todo} id={i} deleteTodo= {deleteTodo} editTodo={editTodo}></Todo>)
    }

    </div>
  )
}

export default TodoList