import React,{useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export function Form(){

  return (
    <div id="form">
      <h2>Fill the form</h2>
      <div id="fill">
        <div id="fill_left">
          <TextField id="standard-basic" label="To" variant="standard" />
          <TextField id="standard-basic" label="From" variant="standard" />
          <TextField id="standard-basic" label="Action Requring Apology" variant="standard" />
          <TextField id="standard-basic" label="Select Option" variant="standard" />
          <TextField id="standard-basic" label="Consequence of your action" variant="standard" />
          <TextField id="standard-basic" label="Your Intention" variant="standard" />
        </div>
        <div id="fill_right">
          <TextField id="standard-basic" label="Percived Motive" variant="standard" />
          <TextField id="standard-basic" label="Adjetive" variant="standard" />
          <TextField id="standard-basic" label="Proposed Solution" variant="standard" />
          <TextField id="standard-basic" label="Request for other party" variant="standard" />
          <TextField id="standard-basic" label="Relationship to reason" variant="standard" />
          <TextField id="standard-basic" label="Your name" variant="standard" />
        </div>
      </div>
      < div id="fill_buttons">
        <Button variant="contained" className="btn" sx={{
          width: 200,
          backgroundColor: 'red',
          marginTop:'40px',
          marginRight:'30px',
        }}>Reset</Button>
        <Button variant="contained"sx={{
          width: 200,
          backgroundColor: 'Green',
          marginTop:'40px',
          marginLeft:'30px',
        }} >Generate</Button></div>
        
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
      <p>It has come to my attention that my action of (1){} colud be seen as(2){} I never intended to (3){}. I want you to understand that I was merely trying to(4){}, tough I can see now that it may appear that I was (5){}. Please accept my (6){} apology. Moving forward, I will attemp to(7){}. That said, I would very much apreciate it if you (8){}. Sincerely, (9){} your, (10){}.</p>
    </div>
  )
}



export default Header;