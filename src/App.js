import React,{useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';

export function Form(){

  return (
    <div id="form">
      <h2>Fill the form</h2>
    </div>
  )

}

function Header() {
  const [status,setStatus] = useState('initial'); // status completed
  return (
    <div id="title">
      <div id="title_top">
        <h2>FORMAL APOLOGY</h2>
      </div>
      <div id="title_down"> 
        <div id="title_down_left">
          <label>To:</label>{}
        </div>
        <div id="title_down_right">
          <label>From:</label>
        </div>
      </div>
    </div>
    
  );
}
export function Letter(){
  const val = 'HELLO';
  return(
    <div id="letter">
      <p>It has come to my attention that my action of {val} colud be seen as I neves intended to . I want you to understand that I was merely trying to, tough I can see now that it may appear that I was . Please accept my apology. Moving forward, I will attemp to. That said, I would very much apreciate it if you. Sincerely, your,.</p>
    </div>
  )
}



export default Header;