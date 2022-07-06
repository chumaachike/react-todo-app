import React from 'react';
import { v4 as uuid } from 'uuid';
import TodoItem from './TodoItem';

function TodoList ({todos, handleChangeProps, deleteTodoProps, updateTitle}){
  return (
   <ul>
    {todos.map(todo=>(<TodoItem key = {uuid()} todo = {todo} handleChangeProps = {handleChangeProps} deleteTodoProps = {deleteTodoProps} updateTitle = {updateTitle}/>))}
   </ul>
  )
  
}
export default TodoList;