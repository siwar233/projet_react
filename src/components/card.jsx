import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { verif } from '../config/authentification';

function Card({ produits }) {
  const authUser=verif()
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(produits);
  };

  return (
    <div className='m-5 text-center'>
      <img style={{ width: 600, height: 'auto' }} src={produits.path} alt='' />
      <div className='m-3'>
        <p style={{ display: 'none' }}>{produits.id}</p>
        <h4>{produits.label}</h4>
        <p>{produits.price}DNT</p>
        <div className='d-flex flex-wrap gap-3 justify-content-between'>
          {authUser ? (
            <>
              <button onClick={handleAddToCart}>
                <Link to='/boutique/paiement'>
                  Ajouter au panier
                </Link>
              </button>
            </>
          ) : null}
        </div>

        
      </div>
    </div>
  );
}

export default Card;
