import React, { useRef, useState } from 'react';
import { useAuth } from './Authentication';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handlecheck(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email.current.value, password.current.value);
      navigate('/'); // Redirect to home page after login
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <div className="body">
      <h1>Log In</h1>
      {error && <div className="alert">{error}</div>}
      <form onSubmit={handlecheck}>
        <label>Email:</label>
        <input type="email" ref={email} required />
        <label>Password:</label>
        <input type="password" ref={password} required />
        <button disabled={loading} className="button" type="submit">LOGIN</button>
      </form>
      <div className="account">
        Create an Account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
