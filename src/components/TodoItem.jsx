import React, { useState } from "react";
import styles from "./TodoItem.module.css"

function TodoItem({ todo, handleChangeProps, deleteTodoProps, updateTitle }) {
  const [state, setState] = useState({ editing: false });
  const { id, title, completed } = todo
  let viewMode = {}
  let editMode = {}
  if (state.editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  const handleEditing = () => {
   setState({editing:true})
  }
  
  const handleUpdatedDone = (event)=>{
    if (event.key === "Enter") {
      setState({ editing: false })
      console.log(state)
    }
}
  return (<li className={styles.item}>
     <div onDoubleClick={handleEditing} style={viewMode}>
      <input className={styles.checkbox} type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(id)} />
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
      <button onClick={() => deleteTodoProps(todo.id)}>Delete</button>
    </div>
    <input type="text" style={editMode} className={styles.textInput}  value={title}  onChange={e => {
    updateTitle(e.target.value, id)
  }} onKeyDown={handleUpdatedDone}/>
  </li>)
}

export default TodoItem;