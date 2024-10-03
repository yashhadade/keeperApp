import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [newKeeper,setNewKeeper]=useState([]);
    
  function addItem(title,content){
    setNewKeeper(previes=>{
      const newItem=[...previes,{title,content}];
      console.log("ud"+newItem);
      return newItem
    })
    
  }
  function deleteItem(id) {
    setNewKeeper((prevItems => prevItems.filter((_, index) => index !== id)));
  }
  return (
    <div>
      <Header />
      <CreateArea 
      OnAdd={addItem}
      />
      {/* //  OnAdd={addItem} */}
     
      {newKeeper.map((item,index)=>(
      <Note
      key={index}
      id={index}
      title={item.title}
      content={item.content}
      deleteItem={deleteItem}
      />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
