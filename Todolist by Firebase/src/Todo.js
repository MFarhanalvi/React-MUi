/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React,{useState} from "react";
import "./Todo.css";
import {Modal,List,ListItem,ListItemAvatar,ListItemText,Button, Paper,} from "@mui/material";
import db from "./firebase";
import DeleteIcon from "@mui/icons-material/Delete";


const style = (theme) => ({
  

  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 8),
    border: '2px solid #000',   
  },
});

function todo(props) {
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const classes=style;
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const [input,setInput]=useState();

  const UpdateTodo =() =>{
   db.collection('todos').doc(props.todo.id).set({
    todo:input
   },{merge: true});
    setOpen(false);
  }

  return (
    <> 
      <Modal
        open={open}
        onClose={e => setOpen(false)}
      >
    <Paper className={classes.paper}>
            <h1>I am Modal</h1>
            <input  placeholder={props.todo.todo} value={input}   onChange={event=> setInput(event.target.value)} />
            <Button variant="contained" color="primary" onClick={UpdateTodo} > Update Todo </Button>
    </Paper>
      </Modal>
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={props.todo.todo}
            secondary="Are You Ready"
          ></ListItemText>
        </ListItem>
        <button onClick={() => setOpen(true)}>Edit</button>
        <DeleteIcon
          onClick={(_event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          Delete
        </DeleteIcon>
      </List>
    </>
  );
}

export default todo;
