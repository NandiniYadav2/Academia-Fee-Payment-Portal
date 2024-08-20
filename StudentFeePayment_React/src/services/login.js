import axios from 'axios'
import { API_BASE_URL } from './constants';
import { useState } from 'react';




const login = async (credentials) => {

  
 try{
   const email = credentials.email;
   const password = credentials.password;
  
   const loginBaseUrl = `${API_BASE_URL}/student/login?email=${email}&password=${password}`;
   const response = await axios.post(loginBaseUrl, credentials)
  
   console.log(response)
   return response.data

}catch(error){
  
  console.error('Login failed:', error.response.data);
  throw new Error(error.response.data); 
}

}

const exportObject = { login }
export default exportObject


