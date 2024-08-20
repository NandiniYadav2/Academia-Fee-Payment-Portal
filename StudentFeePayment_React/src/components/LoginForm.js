import React, { useState } from 'react'
import './LoginForm.css';
import Notification from './Notification';

const LoginForm = ({ startLogin }) => {
 
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const[errorMessage,setErrorMessage] = useState(null);
  
  const handleLogin = async (event) => {
    
    event.preventDefault()
    
    if(email === undefined | password === undefined) return;
    const credentials = {
      email, password
    }

    
    try{
      const response = await startLogin(credentials);
    }catch(error){
      console.error('Login failed:', error.message);
      setErrorMessage(error.message);
    }finally{
      setEmail('')
      setPassword('')
    }

  }

  
  return (
    
  <div>
    <form onSubmit={handleLogin} id='login-form'>
      <input 
        type='email'
        placeholder='Email'
        
        value={email}
        
        onChange={event => setEmail(event.target.value)}
        id='email'
        required
      />
        
      {/* Same as the above username input, except this one has the type password */}
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={event => setPassword(event.target.value)}
        id='password'
        required
      />

      {/* Submit button for the form */}
      <button type='submit' id='login-submit'>LOGIN</button>
    </form>
    <div>
    {errorMessage && <Notification notification={errorMessage} type="error"/>}
    </div>
    </div>
  )

}
export default LoginForm

  
