import { useState } from "react";

const StateBadExample = () => {
  const [count, setCount] = useState(100000);
  const doubleCount = count * 2; // Sem estado extra

  return (
    <div className="grid gap-y-2">
      <h1 className="text-center text-neutral-300 text-4xl">States - Exemplo 1 correto</h1>
      <p
        className="text-center text-neutral-300"
      >
        Dobro: {doubleCount}
      </p>
    </div>
  )
};

export default StateBadExample;
