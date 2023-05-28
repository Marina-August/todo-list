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

    
    return(
        <div className='list'>
            <div >
               <h3>To delete an item click on it!</h3>
            </div>
            <div >
               {props.data.map(el => 
               <div className='item' key={el.id} onClick={() => deleteHandler(el.id)}>{el.text}</div>)}      
            </div>
        </div>
        
    )
}

export default List;