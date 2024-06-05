import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducer/cart";

// 1. Crear contexto
export const CartContext = createContext();
// useRedecer -> es un hook que nos permite manejar el estado de una manera escalable
// utilizando el patrón de reduccion. Se basa en que recibe en una funcion el estado
// actual y la accion que tiene que hacer (cartReducer), y como segundo parametro el
// estado inicial (cartInitialState) 

// [state, dispatch] -> el primer parametro es el estado y como segundo parametro
// tenemos el 'dispatch' es la encargada de enviar las acciones al 'reducer' 

// ¿Vale la pena quitar el estado y usar un useReducer para esto?
// Sí, porque ahora extrajimos la logica en una funcion totalmente separada.
// Incluso se podria usar incluso fuera de react. Ademas, es facil de testear.
// Con el useState el problema que el estado está dentro del componente, la logica
// de actualización está dentro y por lo tanto cuesta más. Es intesante usar
// 'useReducer' cuando se tiene muchos useState, es decir, estados fragmentados
// la función 'dispatch envio/despacho' es la encargada de neviar las acciones a reducer
function useCartReducer() { 
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  console.log(state)
  // Funciones de acción para el carrito de compras
  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAN_CART" });

  return { state, addToCart, removeFromCart, clearCart };
}

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
