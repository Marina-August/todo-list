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
         {props.data.map(el => 
            <h2  key={el.id} onClick={() => deleteHandler(el.id)}>{el.text}</h2>)}      
        </div>
    )
}

export default List;