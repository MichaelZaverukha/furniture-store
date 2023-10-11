import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Orders from './Orders';
import About from './About';
import { Link } from 'react-router-dom';

const showOrders = (orders, onDelete) => {
   let sum = 0;
   orders.forEach(el => sum += Number.parseFloat(el.price) )
   return (
      <div>
         {orders.map(el => (
                <Orders onDelete={onDelete} key={el.id} item={el} />
                  ))}
         <p className='sum'>Sum: {new Intl.NumberFormat().format(sum)}$</p>         
      </div>
   )
}

const showNothing = () => {
   return(
      <div className='empty'>
         <h2>No goods</h2>
      </div>
   )
}

export default function Header(props) {
   let [cartOpen, setCartOpen] = useState(false);
   const orders = props.orders
   const onDelete = props.onDelete
  return (
      <header>
         <div>
            <span className='logo'> Furniture store </span>
            <ul className='nav'>
               <li>Cabinet</li>
               <li><Link to="/about" className='link'>About Us</Link></li>
               <li><Link to="/contacts" className='link'>Contacts</Link></li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${ cartOpen && 'active' }`}/>
            {cartOpen && (
               <div className='shop-cart'>
                  {orders.length > 0 ? showOrders(orders, onDelete) : showNothing()}
               </div>
            )}
         </div>
         <div className='presentation'></div>
      </header>
  )
}
