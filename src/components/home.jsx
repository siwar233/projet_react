import React from 'react';
import Naavbar from './naavbar';
function Home() {
   return (
    <>
    <Naavbar/>
    
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: '100vh',
      
    }}
  >
    <div>
    <h1>Groupement artisanal</h1>
    </div>
    <div>
    <p>Faites de votre shopping ine experience artistique et soutenez le travail manuel exeptionnel.</p>
      <p>Bienvenue dans notre monde ou l'artisanat prend vie en un clic.</p>
      </div>
      <div>
      <button>En savoir plus</button>
      </div>
    </div>
    </>
   )
 }
 
 export default Home;