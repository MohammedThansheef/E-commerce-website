export const initialState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.add],
      };

    case "REMOVE_FROM_CART":
      let updatedCart = [...state.basket];

      let index = updatedCart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      console.log(index, "index is...");
      if (index >= 0) {
        updatedCart.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.id} as its not on cart)`
        );
      }
      return {
        ...state,
        basket: updatedCart,
      };

    case "EMPTY_CART":
      let emptyCart = [state.basket];
      emptyCart.splice(0, emptyCart.length);
      return {
        ...state,
        basket: emptyCart,
      };

    default:
      return state;
  }
}

export default reducer;
