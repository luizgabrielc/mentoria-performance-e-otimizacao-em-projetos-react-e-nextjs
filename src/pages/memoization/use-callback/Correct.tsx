import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";

const UsingUseCallback = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const handleClick = useCallback(() => {
    console.log("Função handleClick foi acionada!"); //recriada, não executada!
  }, [count]); // Só será recriada quando `count` mudar

  return (
    <div className="grid gap-y-2">
      <h1
        className="text-center text-neutral-300 text-4xl"
      >
        useCallback - Exemplo correto
      </h1>
      <Button
        onClick={() => setCount(count + 1)}
      >
        Incrementar Count
      </Button>
      <h2
        className="text-center text-neutral-300"
      >
        Count: {count}
      </h2>
      <Button
        onClick={() => setOtherState(!otherState)}
      >
        Alterar OtherState
      </Button>
      <h2
        className="text-center text-neutral-300"
      >
        OtherState: {String(otherState)}
      </h2>
      <Button
        onClick={handleClick}
      >
        Executar função
      </Button>
    </div>
  );
}

export default UsingUseCallback