import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import TodoList from './TodoList';
import Header from './Header'
import InputTodo from './InputTodo';

function TodoContainer (){
  const [state, setState] = useState( [{
    id: 1,
    title: "Setup development environment",
    completed: true
  },
  {
    id: 2,
    title: "Develop website and add content",
    completed: false
  },
  {
    id: 3,
    title: "Deploy to live server",
    completed: false
  }]);
  const addTitle = (title)=>{
   const newItem = {id:uuid(), title, completed:false}
   setState([...state, newItem])
  }
  const handleChange = (id)=>{
     setState(state.map((item)=>{
      if (item.id === id){
        item.completed = !item.completed
        return item;
      }else{
        return item;
      }
     }))    
  }
  const  delTodo = (id) => {
    setState(state.filter((item)=>item.id !== id))
  };
  const setUpdate = (updatedTitle, id)=>{
    setState(state.map((item)=>{
      if (item.id === id){
        item.title = updatedTitle
      }
      return item
    }))
  }
  return ( 
    <div className="container">
      <div className="inner">
      <Header />
      <InputTodo  addTitle = {addTitle}/>
      <TodoList todos = {state} handleChangeProps = {handleChange} deleteTodoProps={delTodo} updateTitle= {setUpdate}/>  
    </div>
    </div>
  )

}

export default TodoContainer;