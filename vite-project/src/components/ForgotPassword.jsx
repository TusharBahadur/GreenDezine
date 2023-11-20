import  { useState } from 'react';
import { getAuth,sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [resetError, setResetError] = useState(null);
  const [resetSuccess, setResetSuccess] = useState(null);
  const navigate=useNavigate();

  const resetPassword = () => {
      const auth = getAuth();
      sendPasswordResetEmail(auth,email)
      .then(() => {
        setResetSuccess('Password reset email sent. Check your inbox.');
        setResetError(null);
        setTimeout(() => {
            navigate('/');
          }, 5000);
      })
      .catch((error) => {
        setResetSuccess(null);
        setResetError(error.message);
      });
  };

  return (
    <div>

      <div>
        <input
          type='email'
          value={email}
          className='op'
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button onClick={resetPassword}
      
       className='reset'>Reset Password</button>

      {resetError && <span className='resets'>{resetError}</span>}
      {resetSuccess && <span className='resets'>{resetSuccess}</span>}
    </div>
  );
};

export default ForgotPassword;
