import React,{useState} from 'react'
import TodoList from './components/TodoList'

 const App = () => {
   const [todolist,settodolist]=useState([])
   const [isEdited , setIsEdited] = useState(false)
   const [editedtodo, setEditedTodo] = useState("")
   const [todo,settodo]=useState("")



  const addtodo=()=>{
    if(todo.trim() === ""){
      return;
    }

     settodolist([...todolist, todo])
     return settodo("")
  }

  const edittodo2 = () => {


    if(editedtodo.trim() === ""){
      return;
    }


    
     settodolist([...todolist, editedtodo])
     setIsEdited(false)
     return setEditedTodo("")

  }

  const deleteTodo= (id) => {

    const updateTodoList = todolist.filter((todo, index) => id !== index)
    settodolist(updateTodoList)

    
  }

  const editTodo = (id) => {

    setIsEdited(true)
    const editodovalue = todolist.find((todo,index) => index === id )
    setEditedTodo(editodovalue)
    settodolist(todolist.filter((todo,index) => index !==id))

}

  return (
    <>
       <h1>Todo task</h1>
       <input type="text" value={isEdited ? editedtodo : todo}  onChange={ isEdited ?  e=> setEditedTodo (e.target.value) :  e=> settodo (e.target.value)}/>
       <button onClick={isEdited ? edittodo2 : addtodo }>{isEdited ? "Edit Todo" : "Add Todo"}</button>
       <hr />
       <TodoList todolist = {todolist} deleteTodo = {deleteTodo} editTodo= {editTodo} > </TodoList>
    </>
  )
}
export default App