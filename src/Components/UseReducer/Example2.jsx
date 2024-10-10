import { useReducer } from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((c) => c.id !== action.payload.id);
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItem = (item) => {
    dispatch({ type: "add", payload: item });
  };

  const removeItem = (item) => {
    dispatch({ type: "remove", payload: item });
  };

  return (
    <div>
      <ul>
        {cart.map((c) => (
          <li >
            {c.name} - ${c.price}
            <button onClick={() => removeItem(c)}>Remove Item</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem({ id: 1, name: "Item 1", price: 9.99 })}>
        Add Item
      </button>
    </div>
  );
};

export default ShoppingCart;
