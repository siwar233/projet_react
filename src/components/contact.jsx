import React, { useState } from 'react';
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import Naavbar from './naavbar';


const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    clearMessages();
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
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
      <h1 className="title">Contacter</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input className="form-control" type="email" placeholder="tappez votre email" value={email} onChange={handleEmailChange}></input>
          </label>
          <br />
          <label>
            Message:
            <textarea className="form-control"   value={message} onChange={handleMessageChange}></textarea>
          </label>
          <br />
          <button className="btn-submit" type="submit">contacter</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
