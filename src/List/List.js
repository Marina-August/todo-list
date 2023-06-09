import './List.css'

const List =(props)=>{

    if (props.data.length === 0){
        return <div className='list center'>
            <h2>You have nothing to do!</h2>
            </div>
        
    }

    const deleteHandler =(id)=> {
        console.log(id);
        props.onDeleteLine(id);
    }

    const crossHandler = (id)=>{
        //setCrossLine(true)
        console.log(id);
        props.onCompleteLine(id);
    }

    
    return(
        <div className='list'>
            <div >
               <h3>To mark an item as <span>Done</span> - Click on it!</h3>
            </div>
            <div>
               {props.data.map(el => 
               <div className='item-delete'>
               {el.complete && <div className='item' key={el.id} onClick ={() => crossHandler(el.id)}> <s>{el.text} </s></div>}
               {!el.complete && <div className='item' key={el.id} onClick={() => crossHandler(el.id)}>{el.text}</div>}
               <button  className='delete' onClick={() => deleteHandler(el.id)}> Delete Me </button> 
               </div>)}    
            </div>
        </div>
        
    )
}

export default List;