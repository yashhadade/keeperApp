import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const[createArea,setTitle]=useState({title:"",content:""});

  function handleChange(event){
    const {name,value}=event.target;
    setTitle(previus=>({
      ...previus,
      [name]:value,
    }))
  //  console.log(title) 
  };
  function handleSubmit(event){
    event.preventDefault();
    setTitle({title:"",content:""})
  };

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" placeholder="Title" value={createArea.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={createArea.content} />
        <button type="submit" onClick={()=>
          props.OnAdd(createArea.title,createArea.content)
        }>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
