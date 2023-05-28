import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo.js";
import { Button, FormControl, InputLabel, Input } from "@mui/material";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState(["abx", "def"]);
  const [input, setInput] = useState("");
  console.log({ input });

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map(doc=>doc.data().todo))
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const AddTodo = (Event) => {
    Event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);
  };

  return (
    <div className="App">
      <h1>Hello farhan 🚀</h1>

      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input
            value={input}
            onChange={(Event) => setInput(Event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={AddTodo}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
        {/* <button >Add Todo</button> */}
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
