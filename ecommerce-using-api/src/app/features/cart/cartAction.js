export function ItemAdded(item) {
  return {
    type: "add-to-cart",
    item,
  };
}

export function IncrementQuantity(itemId) {
  return {
    type: "increment-quantity",
    itemId,
  };
}

export function DecrementQuantity(itemId) {
  return {
    type: "decrement-quantity",
    itemId,
  };
}

export function RemoveItem(itemId) {
    return {
      type: "remove-item",
      itemId,
    };
  }
  