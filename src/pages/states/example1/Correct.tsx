import { useState } from "react";

const StateBadExample = () => {
  const [count, setCount] = useState(0);
  const doubleCount = count * 2; // Sem estado extra

  return <p>Dobro: {doubleCount}</p>;
};

export default StateBadExample;
