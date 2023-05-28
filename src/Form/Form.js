import './Form.css'
import React, { useState } from 'react';

let count = 0;
const Form = (props)=>{
   const [enteredText, setEnteredText] = useState ('');
    const textChangeHandler = (event)=>{
        setEnteredText (event.target.value);
    }

    const submitHandler =(event) => {
        event.preventDefault();
        const text = enteredText;
        setEnteredText ('');
        const newLine = {
            text: text,
            id: ++count
           }
        props.onSaveData(newLine);
        console.log (newLine);
    }

    

    return(
        <form onSubmit ={submitHandler} className='form'>
            <div className='label'>
                <label>To do today:</label>
            </div>   
            <div>
                <textarea value={enteredText} onChange={textChangeHandler}> </textarea>
            </div>    
            <div className = 'button'>
                <button type="submit">Add Goal</button>       
            </div>
         </form> 
    )
}

export default Form;