import "./Cart.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const context = useContext(CartContext);

  const hasItems = context.items.length > 0;
  const totalAmount = context.totalAmount;

  const cartItems = context.items.map((item) => {
    return (
      <div>
        <ul className="list">
          <li>
            {" "}
            {item.name}: {item.price}{" "}
          </li>
        </ul>
      </div>
    );
  });

  return (
    <>
      {hasItems && (
        <div className="cart-items">
          <div>{cartItems}</div>
          <div>Total: ${totalAmount}</div>
        </div>
      )}
      <div className="cart">
        <button>Cart {context.items.length}</button>
      </div>
    </>
  );
};

export default Cart;
