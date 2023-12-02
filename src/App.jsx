import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./css/app.css";
import "./css/style.css";
import LoginForm from './components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/register';
import Contact from './components/contact';
import Home from './components/home';
import Boutique from './components/boutique';
import Propos from './components/propos';
import Panier from './components/panier';
import Paiement from './components/paiement';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/boutique' element={<Boutique/>}/>
        <Route path='/propos' element={<Propos/>}/>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegistrationForm />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/panier' element={<Panier/>}/>
        <Route path='/boutique/paiement' element={<Paiement/>}/>
      </Routes>
    </BrowserRouter> 
  );
};

export default App;
