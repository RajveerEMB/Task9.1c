import React, { useRef, useState } from 'react';
import { useAuth } from './Authentication';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const enteredPassword = passwordRef.current.value;

    if (!enteredPassword) {
      return setError('Password cannot be empty.');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, enteredPassword);
      navigate('/login');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="body">

        <h1>Create Your First Dev@Deakin Account</h1>

        {error && <div className="alert">{error}</div>}

        <form onSubmit={handleSubmit}>
          <label>NAME*</label>
          <input className='input' type="text" ref={nameRef} required />
          <label>Email*</label>
          <input className='input' type="email" ref={emailRef} required />
          <label>Password*</label>
          <input className='input' type="password" ref={passwordRef} required />
          <button  className="button" type="submit">Sign up</button>
        </form>
      <div className="acc">
        Already have an account? <Link to="/login">Log In !!</Link>
      </div>
    </div>
  );
};

export default Signup;