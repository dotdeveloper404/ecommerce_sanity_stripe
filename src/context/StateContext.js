import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const incQty = () => {
    //when you update the state , using the prev version of state
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id == product._id);
    //thtis is gonna happen when item alaready exist in the cart, which means just to increase the quantity

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );

    setTotalQuantities((prevTotalQuantites) => prevTotalQuantites + quantity);

    if (checkProductInCart) {
      const updatedCartIitems = cartItems.map((cartProduct) => {
        if (cartProduct._id == product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartIitems);
    } else {
      //what if item doesnt add in the cart, means first time adding

      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to cart.`);
  };


  const onRemove = (product) =>{
    foundProduct  = cartItems.find((item) => item._id === product._id);
    const _newCartItems = cartItems.filter((item)=>item._id !== product._id);

    setTotalPrice((prevTotalPrice)=> prevTotalPrice - foundProduct.price  * foundProduct.quantity);
    setTotalQuantities((prevTotalQuantites) => prevTotalQuantites - foundProduct.quantity);
    setCartItems(_newCartItems);

  }

  // just for add the item of cart  not to show multiple times
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);

    //remove cartitem which is already exist becuase we only need to add the quantity of that product
    const _newCartItems = cartItems.filter((item)=>item._id !== id); //only 1 element from index

    if (value === "inc") {
      
      let newCartItems = [
        ..._newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ];
      
      setCartItems(newCartItems);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantites) => prevTotalQuantites + 1);

    } else if (value === "dec") {

      if (foundProduct.quantity > 1) {
      
        let newCartItems = [
          ..._newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ];
      
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantites) => prevTotalQuantites - 1);
      
      }
    }
  };

  return (
    //we use context to pass data to whole application
    ///this will pass al the things to entire application components
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        setShowCart,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

//that is going to allow us  to use our state just like a hook in the components

export const useStateContext = () => useContext(Context);
