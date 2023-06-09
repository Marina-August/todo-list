import Form from './Form/Form';
import './App.css';
import List from './List/List';
import React, { useState, useEffect } from 'react';


const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const userInformation = localStorage.getItem('info');
    if (userInformation) { 
      setList (JSON.parse(userInformation));
    }
  }, []);

  const saveDataHandler =(enteredText)=>{
    setList (prevList => [...prevList, enteredText]);
    localStorage.setItem('info', JSON.stringify([...list, enteredText]));
  }
  

  const deleteHandler =(deleteId)=>{
    const copiedList = list.filter(el => el.id !== deleteId )
    setList (copiedList);
    localStorage.setItem('info', JSON.stringify(copiedList));
  }
  
  const crossHandler =(id)=>{
    const copiedList = list.map(el => {
      if (el.id ===id){
        if (el.complete ===false){
           el.complete = true;
        } else {
          el.complete = false;
        }
      }
      return el;
    });
    setList (copiedList);
    localStorage.setItem('info', JSON.stringify(copiedList));
  }
  
  return (
    <>
        <Form onSaveData = {saveDataHandler}/>
        <List data ={list} onDeleteLine ={deleteHandler} onCompleteLine={crossHandler}/>
    </>
  )
}

export default App;
