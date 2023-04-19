import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useStateContext } from "@/context/StateContext";
import { BsBagCheckFill } from "react-icons/bs";
import { runFireworks } from "../../lib/utils";
const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email for the receipt</p>
        <p className="description">If you have any questions</p>
        <a href="mailto:order@example.com" className="email">
          order@example.com
        </a>

        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
