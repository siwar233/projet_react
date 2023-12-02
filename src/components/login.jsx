import React, { useState } from 'react';
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Naavbar from './naavbar';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    clearMessages();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    clearMessages();
  };

  const clearMessages = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Connexion réussie');
      localStorage.setItem('token','logged in')
      navigate('/');
    } catch (error) {
      console.error('Error signing in:', error.message);
      setErrorMessage('Email ou mot de passe incorrect');
    }
  };
  return (
    <>
    <Naavbar/>
    <div className="app-container">
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <h1 className="title">Se connecter</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input className="form-control" type="email" placeholder="tappez votre email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Mot de passe:
            <input className="form-control" type="password" placeholder="tappez votre mot de passe" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button className="btn-submit" type="submit">Se connecter</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default LoginForm;
