import { useEffect } from "react"
import CartItem from "./CartItem"
import api from "../../api"
import { useState } from "react"
import Spinner from "../ui/Spinner"
import useCartData from "../../hooks/useCartData"
import CartSummary from "./CartSummary"

const CartPage = ({setNumberCartItems}) => {
    
  const {cartItems, setCartItems, cartTotal, setCartTotal, loading, tax} = useCartData()
    
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const totalItems = cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);
      setNumberCartItems(totalItems);
    }
  }, [cartItems]);
  
    if(loading){
      return <Spinner Loading={loading}/>
    }

    if(cartItems.length < 1){
      return (
        <div className="alert alert-primary my-5" role="alert">
          The list is empty. You haven't added any item to your cart
        </div>
      )
    }
    
    return (
    <div className="container my-3 py-3" style={ {height:"80vh", overflow:"scroll"}}>
      <h5 className="mb-4">Shopping Cart</h5>
      <div className="row">
        <div className="col-md-8">
          {cartItems.map(item => <CartItem key={item.id} item={item} 
          cartItems={cartItems} 
          setCartTotal={setCartTotal}
          setNumberCartItems={setNumberCartItems}
          setCartItems={setCartItems}
          />)}
        </div>
        
        <CartSummary cartTotal={cartTotal} tax={tax}/>
      </div>
    </div>
  ) 
}

export default CartPage