import { Button } from "@/components/ui/button";
import { useState } from "react";

const Child = () => {
  console.log("Child renderizou!");
  return <p>Sou um componente filho!</p>;
};

const AvoidReRender = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div
      className="w-full flex flex-col gap-y-2
      items-center justify-center"
    >
      <Button onClick={() => setCount(count + 1)}>Incrementar</Button>
      <p>Contador: {count}</p>
      <Child />
    </div>
  );
};

export default AvoidReRender;
