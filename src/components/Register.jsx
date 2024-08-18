import React, {useState} from 'react';

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmaPassword, setConfirmaPassword] = useState("");
 
  
  function onInputChange(event) {
     const { value, name} = event.target;

    if(name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmaPassword") {
      setConfirmaPassword(value);
  } 
  }

  function onSubmitHandler(event){
    event.preventDefault();

    if (email === '' || password === '' || confirmaPassword === '') {
      alert("Por favor, ingresar todos los campos");
      return; 

    } if (password.length < 6) {
      alert("Las contraseñas deben tener al menos 6 caracteres");
      return;

    }
    if(password !== confirmaPassword){
      alert("Contraseñas no coinciden");
      return;
    }

    alert("Datos Correctos");

    setEmail('');
    setPassword('');
    setConfirmaPassword('');
  
  
  }

    return (
        <>
         <div className='Register'>
            <h1>REGISTRO</h1>
            <form className='form' onSubmit={onSubmitHandler}>
             
                <input 
                    name="email"
                    onChange={onInputChange}
                    value={email}
                    type="text"
                    placeholder="Ingresa tu Email"
                /><br />
                <input 
                    name="password"
                    onChange={onInputChange}
                    value={password}
                    type="password" 
                    placeholder="Contraseña"
                /><br />
                <input 
                    name="confirmaPassword"
                    onChange={onInputChange}
                    value={confirmaPassword}
                    type="password" 
                    placeholder="Confirmar Contraseña"
                /><br />
                <button className='boton' type="submit">Login</button>

            </form>
            </div>
        </>
    );
};

export default Register;