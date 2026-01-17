import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsXCircle } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Cancel = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    // Note: Not clearing cart on cancel, as the user might want to try again
    // localStorage.clear();
    // setCartItems([]);
    // setTotalPrice(0);
    // setTotalQuantities(0);
    // runFireworks(); // Maybe not run fireworks on cancel
  }, []);

  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <p className="icon">
          <BsXCircle />
        </p>
        <h2>Your plan has been cancelled.</h2>
        <p className="email-msg">You will receive a confirmation email shortly.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:support@voltronix.com">
            support@voltronix.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cancel