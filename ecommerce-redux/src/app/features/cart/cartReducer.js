function CartReducer(cart = [], action) {
  switch (action.type) {
    case "add-to-cart":
      return [...cart, action.item];

    case "increment-quantity":
      const prod = cart.find((item) => item.id === action.itemId);
      prod.Quantity = prod.Quantity + 1;
      return [...cart];

    case "decrement-quantity":
      const produ = cart.find((item) => item.id === action.itemId);
      if (produ.Quantity > 1) {
        produ.Quantity = produ.Quantity - 1;
      }
      return [...cart];

    case "remove-item":
      cart = cart.filter((items) => items.id !== action.itemId);
      return [...cart];

    default:
      return cart;
  }
}

export default CartReducer;
