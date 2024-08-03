import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {MdPermIdentity} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import Login from './Login'
const Register = () => {

    const [registerationData,setRegistrationData] = useState({
        username: '',
        password: ''
    })



    const handleRegistrationChange = (e)=>{
        const {name,value}=e.target;
        setRegistrationData((prevData)=>({
            ...prevData,
            [name]: value
        }))
    }

    const handleRegistrationSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:8000/register',registerationData);
            console.log(response.data);
        }
        catch(error){
            console.log(error);
        }
        setRegistrationData({
            username: '',
            password:''
        });

}  
return (
    <div className='register'>
        
        <div>
        <h1>Registration Page</h1>
            <form onSubmit={handleRegistrationSubmit}>
                <div>
                <MdPermIdentity />
                <input
                    type="text"
                    name='username'
                    placeholder='Username'
                    value={registerationData.username}
                    onChange={handleRegistrationChange}
                    required
                />
                </div>
                <div>
                <RiLockPasswordFill />
                <input
                    type="password"
                    name='password'
                    placeholder='Password'
                    value={registerationData.password}
                    onChange={handleRegistrationChange}
                    required
                />
                </div>
            
                
                <button type='submit'>Register</button>
                <p>Already registered 
                    <Link to='/login' element={<Login />}> Login Here</Link>
                </p>
            </form>
        </div>
       
    </div>
  )
}

export default Register