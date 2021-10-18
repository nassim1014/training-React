import Hello from './Componets/Hello.js'
import React ,{useState}from 'react'
import './App.css';
function App() {
  var username='Nassim'
  var password=123
  const [name,setname]= useState('')
  const [passwordstat,setpassword]= useState(password)
  const [logedin,setlogin]= useState(false)
  function login(){
    if(username == name && passwordstat== password ){
      setlogin(true)
    }
  }
  return (
    <div className="App"> 
    <h1>Login</h1>
    <input type={Text} onChange = {
      (event)=> {setname(event.target.value);}
      }>

    </input>
    <input type={'password'}
    onChange={(event)=>{
      setpassword(event.target.value)
    }}></input>
    <button onClick={login}>Submit</button>
    </div>

  );
}

export default App;
