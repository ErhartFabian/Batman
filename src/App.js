import React,{useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export function Form(){
  const [ input,setInput ] = useState(); // para recibir entradas de los input
  const [status,setStatus] = useState('initial'); // check when status completed


  function handleSubmit(event) {
    event.preventDefault();// evita comportamiento default del form
  }

  function fill(){

  }

  function random(){

  }

  function reset(){
    // asignar valores inputs a campos vacios
   return setStatus('initial');// Verifica si es correcta la sintaxis
  }


  return (
    <div id="form" onSubmit={handleSubmit}>
      <h2>Fill the form</h2>
      <div id="fill">
        <div id="fill_left">
          <TextField id="uno" label="To" variant="standard" type="text"/>
          <TextField id="dos" label="From" variant="standard" type="text"/>
          <TextField id="tres" label="Action Requring Apology" variant="standard" type="text"/>
          <TextField id="cuatro" label="Select Option" variant="standard" type="text"/>
          <TextField id="cinco" label="Consequence of your action" variant="standard" type="text"/>
          <TextField id="seis" label="Your Intention" variant="standard" type="text"/>
        </div>
        <div id="fill_right">
          <TextField id="siete" label="Percived Motive" variant="standard" type="text"/>
          <TextField id="ocho" label="Adjetive" variant="standard" type="text"/>
          <TextField id="nueve" label="Proposed Solution" variant="standard" type="text"/>
          <TextField id="diez" label="Request for other party" variant="standard" type="text"/>
          <TextField id="once" label="Relationship to reason" variant="standard" type="text"/>
          <TextField id="doce" label="Your name" variant="standard" type="text"/>
        </div>
      </div>

      < div id="fill_buttons">
        <Button onClick={reset} variant="contained" className="btn" sx={{
          width: 200,
          backgroundColor: 'red',
          marginTop:'40px',
          marginRight:'30px',
        }}>Reset</Button>
        <Button onSubmit={random} variant="contained"sx={{
          width: 200,
          backgroundColor: 'Green',
          marginTop:'40px',
          marginLeft:'30px',
        }} >Random</Button>
        <Button onSubmit={fill} variant="contained"sx={{
          width: 200,
          backgroundColor: 'Blue',
          marginTop:'40px',
          marginLeft:'30px',
        }} >Fill</Button>
        </div>
        
    </div>
  )

}

function Header() {
  
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
      <p>It has come to my attention that my action of (1){} colud be seen as(2){} I never intended to (3){}. I want you to understand that I was merely trying to(4){}, tough I can see now that it may appear that I was (5){}. Please accept my (6){} apology. Moving forward, I will attemp to(7){}. That said, I would very much apreciate it if you (8){}. Sincerely, (9){} your, (10){}.</p>
    </div>
  )
}



export default Header;