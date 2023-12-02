import React from 'react'
import { useCart } from 'react-use-cart'
import { Button } from 'react-bootstrap'
import Naavbar from './naavbar';

function Panier(toggle,setToggle) {
  const {items,updatequantity,emptyCart}=useCart();
  return (
    <>
    <Naavbar/>
    
    <div 
    className='position-fixed w-100 h-100 bg-light-FloralWhite' 
    style={{zIndex:100}}>

      <div className='h-100 col-10 bg-White'>
        <div className='justify-content-between d-flex'></div>
      <h2>Panier</h2>
      <Button onClick={()=>setToggle(!toggle)} variant='light'>X</Button>
      </div>
      <div>
        {items.map((elem, i) =>(
          <div className='d-flex gap-3'>
          <img src={elem.path} className='w-50 object-fit-cover' height={150} />
          <div>
          <p style={{display: 'none'}}>{elem.id}</p>
          <h4>{elem.label}</h4>
          <h6>quantity: <span className='btn btn-secondary' onClick={()=> updatequantity(elem.id,elem.quantity+1)}>+</span> {elem.quantity}<span className='btn btn-secondary' onClick={()=> updatequantity(elem.id,elem.quantity-1)}>-</span></h6>
          <p>{elem.price}DNT</p>
          </div>
          <div>
            <Button>Acheter</Button>
          </div>
          </div>
        ))}
        <div>
          <Button onClick={()=> (emptyCart())}>Annuler</Button>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Panier