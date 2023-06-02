import './Error.css';
import ReactDom from 'react-dom';

const Backdrop =(props)=>{
   return <div className='backdrop' onClick={props.onConfirm}/>
}

const ModalOverlay = (props)=>{
    return (
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
    )
}


const Error =(props)=>{
    return(
        <>
           {ReactDom.createPortal(<Backdrop onConfirm = {props.onConfirm}/>,
            document.getElementById('backdrop-root'))} 
            {ReactDom.createPortal(<ModalOverlay title={props.title} message ={props.message} onConfirm={props.onConfirm}/>,
            document.getElementById('overlay-root'))}
        </>
  
    )
}

export default Error;