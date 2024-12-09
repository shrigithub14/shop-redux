import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Cartitem from '../components/Cartitem';

 
const Cart = () => {
   // cart me kuch hai kya nhi slice btayega state 
   const {cart} = useSelector((state) => state);
   const [totalAmount ,setTotalAmount] = useState(0);
     
   //total sathi
  useEffect(()=>  {
    setTotalAmount( cart.reduce((acc ,curr) => acc+curr.price ,0) );
  } , [cart])

  

  return (
    <div>
   {
        cart.length > 0 ?
        ( <div>
              <div>
               {
                cart.map((item ,index) =>{
                  return <Cartitem key={item.id} item={item} itemIndex={index}/>
                })
               }
               </div>

               <div>
                 <div>Your cart </div>
                 <div>Summary </div>
                 <p>
                  <span>Total Items: {cart.length}</span>
                 </p>
                </div>
                <div>
                  <p>Toatl Amount:{totalAmount} </p>
                  <button>Checkout Now</button>
                  </div>
          </div>
          ):
        ( <div> 
          <h1>cart Empty!</h1>
          <Link to={"/"}>
          <button> Shop Now</button>
          </Link>
          </div>
          )
      }
    </div>
         );

    };
export default Cart;
