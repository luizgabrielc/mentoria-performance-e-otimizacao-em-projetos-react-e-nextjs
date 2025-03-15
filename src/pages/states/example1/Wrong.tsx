import { useEffect, useState } from "react";

const StateBadExample = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(100000);

  useEffect(() => {
    setDoubleCount(count * 2);
  }, [count]);

  return (
    <div className="grid gap-y-2">
      <h1 className="text-center text-neutral-300 text-4xl">States - Exemplo 1 incorreto</h1>
      <p
        className="text-center text-neutral-300"
      >
        Dobro: {doubleCount}
      </p>
    </div>
  )
};

export default StateBadExample