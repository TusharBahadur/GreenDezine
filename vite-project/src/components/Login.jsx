import { useState,useEffect } from 'react'

import {auth} from "../firebase"

import Images from '../Images/Images'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword,onAuthStateChanged,signOut } from 'firebase/auth';

const Login=()=>{
    const [email,setEmail] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [password,setPassword] = useState('');
    const signIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((useCredential) =>{
            console.log(useCredential)
        
            navigate('/Home')


        })
        .catch((error)=>{
            console.log(error.code)
            switch (error.code) {
                case 'auth/user-not-found':
                  setError('User does not exist')
                  break;
                
                case 'auth/invalid-login-credentials':
                    setError('Invalid Credentials');
                  break;
    
        }
        setTimeout(() => {
            setError(null);
          }, 5000);
    })

    }
    useEffect(() => {
        setEmail('');
        setPassword('');
    }, []);
       
    
    const userSignOut=()=>{
        signOut(auth)
        console.log("signedout")
    }
    return(
        <div className='hello'>
        
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
                <button className='op2' onClick={signIn}><span>Login</span></button>
              
                
                 
            </div>
            <div>

            </div>
            
            <div>

                <span className='hi2'onClick={()=>{
                    
                    navigate('/CreateUser')
                    

                }}>Create Profile</span>
                
            
            </div>
            
        </div>
    )
}
export default Login