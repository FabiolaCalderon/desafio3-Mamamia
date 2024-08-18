import React, {useState} from 'react';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  function onInputChange(event) {
     const { value, name} = event.target;

    if(name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
  }
 }
 

  function onSubmitHandler(event) {
    event.preventDefault();

    if (email === '' || password === '') {
      alert("Por favor, ingresar todos los campos");
      return; 

    } if (password.length < 6) {
      alert("Las contraseñas deben tener al menos 6 caracteres");
      return;
    }

    alert("Datos Correctos");

    setEmail('');
    setPassword('');  
  
  }
 

    return (
        <>
        <div className='login'>
            <h1 >LOGIN</h1>
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

                <button className='boton' type="submit">Login</button>

            </form>
            </div>
          
        </>
    );
};

export default Login;