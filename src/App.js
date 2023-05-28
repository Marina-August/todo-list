import Form from './Form/Form';
import './App.css';
import List from './List/List';
import React, { useState } from 'react';


let count = 0;

const App = () => {
  const [list, setList] = useState([]);

  const saveDataHandler =(enteredText)=>{
    setList (prevList => [...prevList, enteredText])
  }
  

  const deleteHandler =(deleteId)=>{
    const copiedList = list.filter(el => el.id !== deleteId )
    setList (copiedList);
  }
  
  
  return (
    <div>
        <Form onSaveData = {saveDataHandler}/>
        <List data ={list} onDeleteLine ={deleteHandler}/>
    </div>
  )
}

export default App;
