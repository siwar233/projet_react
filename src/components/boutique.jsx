import React from 'react'
import  Card  from '../components/card'; /*des erreur sont afficher alors on utilise comme solution :modification de l'importation concernant Mycard*/
import Produits from '../components/produit';
import Naavbar from './naavbar';


function Boutique() {
   return (
    <>
    <Naavbar/>
    <div
        style={{
        padding: '20px',
        }}
    >
     <div className="d-flex flex-wrap gap-3 justify-content-around align-items-center "> 
       {Produits.map((elem, i) => (
        <Card key={i} produits ={elem} />
       ))}
     </div>
     </div>
     </>
   )
     
}
 
 export default Boutique
