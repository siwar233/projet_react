import React, { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    clearMessages();
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    clearMessages();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    clearMessages();
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
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

  const handleSubmit =  (e) => {
    e.preventDefault();
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim()==='' ||  password.trim()==='') {
      setErrorMessage("Les champs ne peuvent pas être vides");
      return;
    }
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      setErrorMessage("Le nom et le prénom ne peuvent contenir que des lettres");
      return;
    }
    if (phoneNumber.trim().length !== 8) {
      setErrorMessage("Le numéro de téléphone doit avoir une longueur de 8 caractères");
      return;
    }
    const numberRegex = /^[0-9]+$/;
    if (!numberRegex.test(phoneNumber)) {
      setErrorMessage("Le tel ne peuvent contenir que des chiffres");
      return;
    }
    try {
      createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage('inscription réussie');
      navigate('/login')
    } catch (error) {
      console.error(error.message);
      setErrorMessage('erreur');
    }
  };

  return (
    <div className="app-container">
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <h1 className="title">S'inscrire</h1>
        <div className="form-container">
            <form name="f" onSubmit={handleSubmit}>
            <label>
                Nom:
                <input className="form-control" type="text" name="fn" value={firstName} onChange={handleFirstNameChange} ></input>
            </label>
            <br />
            <label>
                Prénom:
                <input  className="form-control" type="text" name="ln" value={lastName} onChange={handleLastNameChange}></input>
            </label>
            <br />
            <label>
                Email:
                <input className="form-control" type="email" name="em" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
                Téléphone:
                <input className="form-control" type="tel" name="pn" value={phoneNumber} onChange={handlePhoneNumberChange} />
            </label>
            <br />
            <label>
                Mot de passe:
                <input className="form-control" type="password"  value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button  type="submit" className="btn-submit">S'inscrire</button>
            </form>
        </div>
    </div>
  );
};
export default RegistrationForm;

