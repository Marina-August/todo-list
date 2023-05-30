import './Form.css'
import React, { useState } from 'react';

let count = 0;
const Form = (props)=>{
    const [valid, setvalid] =useState(true);

    const [enteredText, setEnteredText] = useState ('');
    const textChangeHandler = (event)=>{
        if (event.target.value.trim().length > 0){
            setvalid(true);
        }
        setEnteredText (event.target.value);
    }

    const submitHandler =(event) => {
        event.preventDefault();
        const text = enteredText;
        if (text.trim().length === 0){
            setvalid(false);
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

    
    return(
        <form onSubmit ={submitHandler} className='form'>
            <div className='label'>
                <label>To do today:</label>
            </div>   
            <div>
                <textarea value={enteredText} onChange={textChangeHandler}
                 className={`${!valid? 'invalid':''}`}> </textarea>
            </div> 
            <div  className={`${!valid? 'invalid-text':''}`}>{!valid && 'The text can not be empty'}</div>   
            <div className = 'button'>
                <button type="submit">Add Goal</button>       
            </div>
         </form> 
    )
}

export default Form;