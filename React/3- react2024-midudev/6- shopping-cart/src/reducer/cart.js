// export const CART_ACTION_TYPES = {
//   ADD_TO_CART: "ADD_TO_CART",
//   REMOVE_FROM_CART: "REMOVE_FROM_CART",
//   CLEAR_CART: "CLEAR_CART",
// };

// update localStorage with state for cat
export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

// useRedecer -> es un hook que nos permite manejar el estado de una manera escalable
// utilizando el patrón de reduccion. Se basa en que recibe en una funcion el estado
// actual y la accion que tiene que hacer, y a partir de ello devuelve el nuevo estado.
// Esto está complematamente separado del Componente, del Provider y del Cusom Hook

// -> Se necesita un estado inicial, puede ser lo que sea: "". 10, [], {}, etc.
// En resumen: Calcula el estado apartir de las accíon y devuelve un nuevo estado

// PERSISTENCIA
export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const cartReducer = (state, action) => {
  // En el 'type' le pasamos el string para identificar la accion que
  // tenemos que hacer, y  en el 'payload' le pasamos todo el objeto
  // que necesitamos para actualizar el estado (hay veces q es opcional)
  const { type: actionType, payload: actionPayload } = action;
  //      acción            object need

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
        ...state, // estado actual
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
