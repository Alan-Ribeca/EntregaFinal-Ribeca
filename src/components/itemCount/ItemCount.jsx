import { useCounter } from "../hooks/useCounter";

export const ItemCount = () => {
  const { count, increment, decrement, reset } = useCounter(1, 10, 1);

  const handleAddToCart = () => {
    console.log("Producto agregado al carrito");
  };

  return (
    <div>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
};
