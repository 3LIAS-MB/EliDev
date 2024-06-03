// PERSISTENCIA
export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

// update localStorage with state for cat
export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

// useReducer -> es un hook que nos permite manejar el estado de una manera escalable
// porque se basa en que recibe en una funcion el estado actual y la accion que tiene
// que hacer, y apartir de esto devuelve el nuevo estado. Esto está separado de
//  componente, provider o custom hook

// ¿Vale la pena quitar el estado y usar un useReducer para esto?
// Sí, porque ahora extrajimos la logica en una funcion totalmente separada.
// Incluso se podria usar incluso fuera de react. Ademas, es facil de testear.
// Con el useState el problema que el estado está dentro del componente, la logica
// de actualización está dentro y por lo tanto cuesta más. Es intesante usar
// 'useReducer' cuando se tiene muchos useState, es decir, estados fragmentados
export const cartReducer = (state, action) => {
  // En el 'type' le pasamos el string para identificar la accion que
  // tenemos que hacer, y  en el 'payload' le pasamos todo el objeto
  // que necesitamos para actualizar el estado (hay veces q es opcional)
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        // 👀 una forma sería usando structuredClone
        // para hacer una copia PROFUNDA del array
        // const newState = structuredClone(state)
        // newState[productInCartIndex].quantity += 1

        // 👶 usando el map
        // const newState = state.map(item => {
        //   if (item.id === id) {
        //     return {
        //       ...item,
        //       quantity: item.quantity + 1
        //     }
        //   }

        //   return item
        // })

        // ⚡ usando el spread operator y slice
        const newState = [
          ...state.slice(0, productInCartIndex),
          {
            ...state[productInCartIndex],
            quantity: state[productInCartIndex].quantity + 1,
          },
          ...state.slice(productInCartIndex + 1),
        ];

        updateLocalStorage(newState);
        return newState;
      }

      // En el caso de que no estuviese en el carrito
      const newState = [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1,
        },
      ];

      updateLocalStorage(newState);
      return newState;
    }

    case "REMOVE_FROM_CART": {
      const { id } = actionPayload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }

    case "CLEAN_CART": {
      updateLocalStorage([]);
      return [];
    }
  }

  return state;
};

// testando que el reducer funciona
// para añdir un producto al carrito
// expect(
//   reducer([], { type: 'ADD_TO_CART', payload: { id: 1 }})
// ).toEqual([{ id: 1, quantity: 1 }])
