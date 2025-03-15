import { Button } from "@/components/ui/button";
import { useState, memo } from "react";

const Child = memo(() => {
  console.log("Child renderizou!");
  return <p
    className="text-center text-red-500 border border-red-500 p-2 rounded"
  >Sou um componente filho!</p>;
});

const AvoidReRender = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="grid gap-y-2">
      <h1 className="text-center text-neutral-300 text-4xl">Evitando re-renders - Exemplo correto</h1>
      <Button onClick={() => setCount(count + 1)}>Incrementar</Button>
      <p
        className="text-center text-neutral-300"
      >
        Contador: {count}
      </p>
      <Child />
    </div>
  );
};

export default AvoidReRender;
