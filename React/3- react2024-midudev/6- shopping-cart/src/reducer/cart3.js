import { createContext, useState } from "react";

// 1. Crear contexto
export const CartContext = createContext();

// 2. Crear Provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //setCart([... cart, product])

    // Check if the product is already in the cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    if (productInCartIndex >= 0) {
      // una forma seria utilizando 'structuredClone'
      // para hacer una copia PROFUNDA del array
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    // If producto don't is on the cart
    setCart((prevState) => [
      // operador de propagación (spread operator).
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (product) => { // rest condition
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}