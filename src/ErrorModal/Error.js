import './Error.css';

const Error =(props)=>{
    return(
        <div>
            <div className='backdrop' onClick={props.onConfirm}>
            </div>
            <div className="error">
              <header className='header'>
                 <h2>{props.title}</h2>
              </header >
              <div>
                <h3>{props.message}</h3>
              </div>
              <footer>
                <div className = 'error-button'>
                  <button  onClick ={props.onConfirm}>Ok</button>       
                </div>
              </footer>
            </div>
        </div>
  
    )
}

export default Error;