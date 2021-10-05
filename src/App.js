import React,{useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Form(){
    //Bancos de Respuestas para random
    const toNames = [
      "Olivia",
      "Jacob",
      "Oliver",
      "Lucas",
      "Evelyn",
      "Eva",
    ];

    const fromNames = [
        "Pedro",
        "Máximo",
        "María",
        "Francisca",
        "Fidel",
        "Roberta",
    ];

    const actions = [
        "bothering",
        "alarming",
        "boring",
        "frightening",
        "screaming",
        "crying"
    ];

    const options = [
        "offensive",
        "annoying",
        "selfish",
        "hurtful"
    ];

    const consequences = [
        "hurt",
        "damage",
        "annoy",
        "discomfort",
        "embarrass",
        "injure",
    ];

    const intentions = [
        "laugh",
        "smile",
        "be gracious",
        "be happy",
        "enjoy",
        "be peaceful",
    ];

    const motives = [
        "enigmatic",
        "cryptic",
        "uncanny",
        "magical",
        "baffling",
        "astrological"
    ];

    const adjectives = [
        "great",
        "awesome",
        "positive",
        "cheap",
        "awful",
        "lousy"
    ];

    const solutions = [
        "eat silentily",
        "drive quickly",
        "walk carefully",
        "not read loudly",
        "not sweep reluctanly",
        "breathe quietly"  
    ];

    const reqParty = [
        "don't tell my parents",
        "don't try to get even",
        "don't call the police",
        "forgive me",
        "be patient with me",
        "forget it ever happened"
    ];

    const relPerson = [
        "acquaintance",
        "boss",
        "best friend",
        "cousin",
        "teacher",
        "coach"
    ];


  const [activar, setActivar] = useState(false); //Para deshabilitar las inputs
  const [status, setStatus] = useState('initial'); // check when status completed
  const [answers, setAnswers] = useState({ //Objeto con las respuestas
    uno: "",
    dos: "",
    tres: "",
    cuatro: "",
    cinco: "",
    seis: "",
    siete: "",
    ocho: "",
    nueve: "",
    diez: "",
    once: "",
    doce: ""
  });

  function handleChange(event){ //Función para guardar los valores en el objeto
    setAnswers({
      ...answers,
      [event.target.id]: event.target.value
    })
  };

  function handleSubmit(event) {
    event.preventDefault();// evita comportamiento default del form
  }

  function fill(){
    setStatus("complete");
    setActivar(true);
  }

  function random(){
    const fromN = Math.floor(Math.random()*6);
    setAnswers({
      uno: toNames[Math.floor(Math.random()*6)],
      dos: fromNames[fromN],
      tres: actions[Math.floor(Math.random()*6)],
      cuatro: options[Math.floor(Math.random()*4)],
      cinco: consequences[Math.floor(Math.random()*6)],
      seis: intentions[Math.floor(Math.random()*6)],
      siete: motives[Math.floor(Math.random()*6)],
      ocho: adjectives[Math.floor(Math.random()*6)],
      nueve: solutions[Math.floor(Math.random()*6)],
      diez: reqParty[Math.floor(Math.random()*6)],
      once: relPerson[Math.floor(Math.random()*6)],
      doce: fromNames[fromN],
    })
  }

  function reset(){
    // asignar valores inputs a campos vacios
   setStatus('initial');
   setActivar(false);
   setAnswers({
     uno: "",
     dos: "",
     tres: "",
     cuatro: "",
     cinco: "",
     seis: "",
     siete: "",
     ocho: "",
     nueve: "",
     diez: "",
     once: "",
     doce: ""
   })
  }


  return (
    <div id="form" onSubmit={handleSubmit}>
      <h2>Fill the form</h2>
      <div id="fill">
        <div id="fill_left">
          <TextField id="uno" label="To" variant="standard" type="text" onChange={handleChange} disabled={activar} value={answers.uno}/>
          <TextField id="dos" label="From" variant="standard" type="text" onChange={handleChange} disabled={activar} value={answers.dos}/>
          <TextField id="tres" label="Action Requring Apology" variant="standard" type="text" onChange={handleChange} disabled={activar} value={answers.tres}/>
          <TextField id="cuatro" label="Select Option" variant="standard" type="text" onChange={handleChange} disabled={activar} value={answers.cuatro}/>
          <TextField id="cinco" label="Consequence of your action" variant="standard" type="text" onChange={handleChange} disabled={activar} value={answers.cinco}/>
          <TextField id="seis" label="Your Intention" variant="standard" type="text" onChange={handleChange} disabled={activar} value={answers.seis}/>
        </div>
        <div id="fill_right">
          <TextField id="siete" label="Percived Motive" variant="standard" type="text" onChange={handleChange} disabled={activar} value={answers.siete}/>
          <TextField id="ocho" label="Adjetive" variant="standard" type="text" onChange={handleChange} disabled={activar} value={answers.ocho}/>
          <TextField id="nueve" label="Proposed Solution" variant="standard" type="text" onChange={handleChange} disabled={activar} value={answers.nueve}/>
          <TextField id="diez" label="Request for other party" variant="standard" type="text" onChange={handleChange} disabled={activar} value={answers.diez}/>
          <TextField id="once" label="Relationship to reason" variant="standard" type="text" onChange={handleChange} disabled={activar} value={answers.once}/>
          <TextField id="doce" label="Your name" variant="standard" type="text" onChange={handleChange} disabled={activar} value={answers.doce}/>
        </div>
      </div>

      < div id="fill_buttons">
        <Button onClick={reset} variant="contained" className="btn" sx={{
          width: 200,
          backgroundColor: 'red',
          marginTop:'40px',
          marginRight:'30px',
        }}>Reset</Button>
        <Button onClick={random} variant="contained"sx={{
          width: 200,
          backgroundColor: 'Green',
          marginTop:'40px',
          marginLeft:'30px',
        }} >Random</Button>
      
        <Button onClick={fill} variant="contained"sx={{ //Debería ser onSubmit
          width: 200,
          backgroundColor: 'Blue',
          marginTop:'40px',
          marginLeft:'30px',
        }} >Generate</Button>

        </div>

        <div id="title" className={status === "complete" ? "show" : "hide"}>
          <div id="title_top">
            <h2>FORMAL APOLOGY</h2>
          </div>
          <div id="title_down"> 
            <div id="title_down_left">
              <label>To: {answers.uno}</label>
            </div>
            <div id="title_down_right">
              <label>From: {answers.dos}</label>
            </div>
          </div>
        </div>
        
        <div id="letter" className={status === "complete" ? "show" : "hide"}>
           <p>It has come to my attention that my action of (1){answers.tres} colud be seen as(2){answers.cuatro} I never intended to (3){answers.cinco}. 
           I want you to understand that I was merely trying to(4){answers.seis}, tough I can see now that it may appear that I was (5){answers.siete}. 
           Please accept my (6){answers.ocho} apology. Moving forward, I will attemp to(7){answers.nueve}. That said, I would very much apreciate it if you (8){answers.diez}. 
           Sincerely, (9){answers.once} your, (10){answers.doce}.</p>
        </div>

    </div>
  )
}
  
// function Header() {
  
//   return (
//     <div id="title">
//       <div id="title_top">
//         <h2>FORMAL APOLOGY</h2>
//       </div>
//       <div id="title_down"> 
//         <div id="title_down_left">
//           <label>To: {answers.uno}</label>{}
//         </div>
//         <div id="title_down_right">
//           <label>From:</label>
//         </div>
//       </div>
//     </div>
    
//   );
// }



// export function Letter(){
//   const val = 'HELLO';
//   return(
//     <div id="letter">
//       <p>It has come to my attention that my action of (1){} colud be seen as(2){} I never intended to (3){}. I want you to understand that I was merely trying to(4){}, tough I can see now that it may appear that I was (5){}. Please accept my (6){} apology. Moving forward, I will attemp to(7){}. That said, I would very much apreciate it if you (8){}. Sincerely, (9){} your, (10){}.</p>
//     </div>
//   )
// }



// export default Header;

export default Form;