import React, { useState } from "react";

function InputTodo ({addTitle}){
  const [state, setState] = useState({title:''});
  const handleChange = (event)=>{
    setState([event.target.name] = event.target.value)
  }

  
  const handleSubmit = (event)=>{
    event.preventDefault()
    if(state !== '' && typeof state !== 'object'){
      addTitle(state);  
      setState({title:''})
    }else{
      alert('Please add an item')
    }

  }
  return (
    <form onSubmit={handleSubmit} className="form-container">
        <input className="input-text" type="text" placeholder="Add Todo..." onChange={handleChange} value={state.title}/>
        <button className="input-submit">Submit</button>
      </form> 
  );
}
export default InputTodo