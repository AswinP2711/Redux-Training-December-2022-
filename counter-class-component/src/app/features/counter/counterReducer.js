export function CounterReducer(count = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return count + 1; 
    case "DECREMENT":
      return count - 1;
    case "INCREMENTBYAMOUNT":
      return (count += action.amount);
    case "DECREMENTBYAMOUNT":
      return (count -= action.amount);
    default:
      return count;
  }
}
