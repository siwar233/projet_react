

import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import Naavbar from "./naavbar";
function Paiement() {

  const [numeroCarte, setNumeroCarte] = useState("");
  const [isNumeroCarteValid, setIsNumeroCarteValid] = useState(true);
  const [isRadioChecked, setIsRadioChecked] = useState(false);

  
  const [nam, setNam] = useState("");
  const [Email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate();

  
  
  const handleNumeroCarteChange = (e) => {
    const value = e.target.value;

    
    setIsNumeroCarteValid(!isNaN(value) && value !== "" && value.length === 16 );

    
    setNumeroCarte(value);
  };

  const handleRadioChange = (e) => {
    // Vérifier si l'un des boutons radio est coché
    setIsRadioChecked(!!e.target.value); // !! converts the value to a boolean

    // Autres actions à effectuer lors du changement du bouton radio
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/panier')
    

    // Vérifier si "numeroCarte" est numérique
   /* if (!isNumeroCarteValid) {
     ("Le numéro de carte doit être numérique et composé de 16 numero ");
      return;
    }*/
 
 //your EmailJS service ID,template ID and public key
 const serviceId='service_lf92mod';
 const templateId='template_reg20ej';
 const publicKey='afliOVCY-MPqrV1eO';

 // create a new object that contains dynamic template params
const templateParams ={
from_name :nam,
from_email:Email,
to_name :{nam},
message:message,

};

// send the email using emailJs
emailjs.send(serviceId,templateId,templateParams,publicKey)
  .then((response)=>{
console.log('Email sent seccessfully!!',response);
setNam('');
setEmail('');
setMessage('');
  })

.catch((error) =>
{
console.error('Error sending email:',error);

});





    // Vérifier si l'un des boutons radio est coché
    if (!isRadioChecked) {
      alert("Veuillez sélectionner un mode de paiement.");
      return;
    }

    // Autres actions à effectuer lors de la soumission du formulaire
  };

  return (
    <>
    <Naavbar/>
    <div className="container">
      <div className="form-container">
        <h2>Paiement</h2>
        <form name="f" onSubmit={handleSubmit}  >
        <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" 
        class="form-control"
         id="nom" 
         placeholder="tapez votre nom "
           value={nam}
           onChange={(e)=>setNam(e.target.value)}
           required />
      </div>
      <div class="form-group">
        <label for="prenom">Prénom</label>
        <input type="text" class="form-control" id="prenom" placeholder="tapez votre prenom " required/>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email"
         class="form-control"
          id="email" 
           placeholder="tapez votre mail "
           value={Email}
           onChange={(e)=>setEmail(e.target.value)}
           required/>
      </div>
      <div class="form-group">
        <label>Paiement par</label>
        <div class="form-check">

          <input class="form-check-input" type="radio" name="level" id="carteBancaire" value="carte_bancaire" onChange={handleRadioChange}/>
          <label class="form-check-label" for="carteBancaire">Carte Bancaire</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="level" id="carteEDinare" value="carte_e_dinare" onChange={handleRadioChange}/>
          <label class="form-check-label" for="carteEDinare">Carte E Dinare</label>
        </div>
      </div>
          <div className="form-group">
            <label htmlFor="numeroCarte">Numéro de carte</label>
            <input
              type="text"
              className="form-control"
              id="numeroCarte"
              required
              placeholder="tapez votre numero du carte choisir "
              value={numeroCarte}
              onChange={handleNumeroCarteChange}
            />
            {!isNumeroCarteValid && <p>Le numéro de carte doit être numérique et composé de 16 numero.</p>}
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>

  );
}

export default Paiement;