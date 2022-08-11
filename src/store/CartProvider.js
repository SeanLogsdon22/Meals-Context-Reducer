import CartContext from "./cart-context";
import { useReducer } from "react";

const ContextProvider = (props) => {
  const defaultCartState = {
    items: [],
    totalAmount: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        const items = state.items.concat(action.payload);
        const totalAmount =
          state.totalAmount + action.payload.price * action.payload.amount;
        return {
          items: items,
          totalAmount: totalAmount
        };
      default:
        return defaultCartState;
    }
  };

  const [cartState, dispatchCartAction] = useReducer(reducer, defaultCartState);

  const addItemCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  };

  const removeItemCartHandler = (id) => {
    dispatchCartAction({ type: "CLEAR", payload: id });
  };

  const storeContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler
  };

  return (
    <>
      <CartContext.Provider value={storeContext}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default ContextProvider;
