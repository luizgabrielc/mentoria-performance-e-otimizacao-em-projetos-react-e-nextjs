import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

const UsingUseMemo = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const memoizedValue = useMemo(() => {
    console.log("Calculando...");
    return count1 * 2;
  }, [count1]);

  return (
    <div className="grid gap-y-2">
      <h1 className="text-center text-neutral-300 text-4xl">useMemo - Exemplo correto</h1>
      <Button
        onClick={() => setCount1(count1 + 1)}
      >
        Incrementar count1
      </Button>
      <p
        className="text-center text-neutral-300"
      >
        Resultado count1: {count1}
      </p>
      <Button
        variant="outline"
        onClick={() => setCount2(count2 + 1)}
      >
        Incrementar count2
      </Button>
      <p
        className="text-center text-neutral-300"
      >
        Resultado count2: {count2}
      </p>
      <p
        className="text-center text-neutral-300"
      >
        Resultado memoizedValue: {memoizedValue}
      </p>
    </div>
  );
};

export default UsingUseMemo;
