import React, { useEffect } from 'react'
import OrderSummary from './OrderSummary'
import PaymentSection from './PaymentSection'
import useCartData from '../../hooks/useCartData'

const CheckoutPage = ({setNumberCartItems}) => {
  
  const {cartItems, setCartItems, cartTotal, setCartTotal, loading, tax} = useCartData()

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const totalItems = cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);
      setNumberCartItems(totalItems);
    }
  }, [cartItems]);

  return (
    <div style={{ minHeight: "80vh" }}>
      <div className="container my-3">
        <div className="row">
          <OrderSummary cartItems={cartItems} cartTotal={cartTotal} tax={tax} />
          <PaymentSection />
        </div>
      </div>
    </div>
  );
  
}

export default CheckoutPage