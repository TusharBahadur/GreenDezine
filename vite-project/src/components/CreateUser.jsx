import { useState,useEffect } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase"

import Images from '../Images/Images'
import { useNavigate } from 'react-router-dom';


const Login=()=>{
    const [email,setEmail] = useState('');
    const [error, setError] = useState(null);
    const [password,setPassword] = useState('');
    const navigate=useNavigate();
    useEffect(() => {
        setEmail('');
        setPassword('');
    }, []);
    const userSignOut=()=>{
        signOut(auth)
        console.log("signedout")
    }
    const signUp=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((useCredential) =>{

            console.log(useCredential)
            navigate('/')


        })
        .catch((error)=>{
            switch(error.code){
                case 'auth/email-already-in-use':
                    setError('Email is already in use');
                    setTimeout(() => {
                        navigate('/')
                      }, 3000);
                 
                  break;
            }
            
        })

        

    }
       
    
    return(
        <div>
        
            <img src={Images.image1} alt="Example" className='logo'/>
                        <p className='yo'>#We are Electric</p>
                        <div className='error-message-container'>
                        {error ? <h6 className='error-message'>{error}</h6> : ""}
                        
                        </div>


            <div>
                <input type='email' 
                value={email} 
                placeholder='E-mail' 
                className='op'
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
          
            <div>
                <input type='password' 
                value={password} 
                placeholder='Password' 
                className='op1'
                onChange={(e)=> setPassword(e.target.value)}
                />
            </div>

            <div>
                <button className='op2' onClick={signUp}>
                    <span>Create Profile</span></button>
                
                 
            </div>
            <div>
                <button onClick={userSignOut}>SignOut</button>
            </div>
            
            <div>
                <span className='hi'>Forgot Password?</span>
                
            </div>
            
        </div>
    )
}
export default Login