import './Form.css'
import React, { useState } from 'react';
import Error from '../ErrorModal/Error';

let count = 0;
const Form = (props)=>{
    const [valid, setValid] =useState(true);
    const [enteredText, setEnteredText] = useState ('');

    const textChangeHandler = (event)=>{
        if (event.target.value.trim().length > 0){
            setValid(true);
        }
        setEnteredText (event.target.value);
    }

    const submitHandler =(event) => {
        event.preventDefault();
        const text = enteredText;
        if (text.trim().length === 0){
            setValid(false);
            return;
        }
        setEnteredText ('');
        const newLine = {
            text: text,
            id: ++count
           }
        props.onSaveData(newLine);
        console.log (newLine);
    }

    const errorHandler = ()=>{
        setValid(true);
    }

    
    return(
        <div>
        {!valid && <Error title ={'An Error occured'} message = {'Text can not be empty'} onConfirm= {errorHandler}/>}
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
         </div>
    )
}

export default Form;