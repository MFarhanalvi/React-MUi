import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@mui/material";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

function App() {
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([
    { username: "farhan", message: "hellooo" },
    { username: "ahmad", message: "whats up" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setmessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter Your Name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setmessages([...messages, { username: username, message: input }]);
    setinput("");
  };

  return (
    <div className="App">
      <h1>Messenger Clone 🚀</h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel></InputLabel>
          <Input className="app__input" placeholder="Enter your message" value={input} onChange={(event) => setinput(event.target.value)}/>
          {/* <Button disabled={!input} variant="contained" primary="color" type="submit" onClick={sendMessage}>
            Send
          </Button> */}

          <IconButton className="app__iconB" disabled={!input} variant="contained"  primary="color" type="submit" onClick={sendMessage}>

            <SendIcon/>

          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map( ({id,message}) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
