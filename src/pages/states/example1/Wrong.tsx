import { useEffect, useState } from "react";

const StateBadExample = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  useEffect(() => {
    setDoubleCount(count * 2);
  }, [count]);

  return <p>Dobro: {doubleCount}</p>;
};

export default StateBadExample