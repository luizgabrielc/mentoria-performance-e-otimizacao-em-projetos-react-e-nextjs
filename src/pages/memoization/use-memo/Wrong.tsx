import { Button } from "@/components/ui/button";
import { useState } from "react";

const NotUsingUseMemo = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const heavyCalculation = () => {
    console.log("Calculando...");
    return count1 * 2;
  };

  return (
    <div
      className="w-full flex flex-col gap-y-2
      items-center justify-center"
    >
      <Button
        onClick={() => setCount1(count1 + 1)}
      >
        Incrementar count1
      </Button>
      <Button
        variant="outline"
        onClick={() => setCount2(count2 + 1)}
      >
        Incrementar count2
      </Button>
      <p>Resultado count1: {count1}</p>
      <p>Resultado count2: {count2}</p>
      <p>Resultado heavyCalculation: {heavyCalculation()}</p>
    </div>
  );
};

export default NotUsingUseMemo;
