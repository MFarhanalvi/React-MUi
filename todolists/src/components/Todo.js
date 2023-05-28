import React from 'react'

const Todo = ({todo,id, deleteTodo, editTodo}) => {


  

  return (
    <div>
        <p>{todo}</p>
        <button onClick={() => deleteTodo(id)}>Delete</button>
        <button onClick={() => editTodo(id)} >Edit</button>
    </div>
  )
}

export default Todo