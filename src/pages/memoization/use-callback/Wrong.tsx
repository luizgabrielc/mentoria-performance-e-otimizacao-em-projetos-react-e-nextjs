import { Button } from "@/components/ui/button";
import { useState } from "react";

const NotUsingUseCallback = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const handleClick = () => {
    console.log("Função handleClick foi acionada!"); //recriada, não executada!
  };

  return (
    <div className="grid gap-y-2">
      <h1
        className="text-center text-neutral-300 text-4xl"
      >
        useCallback - Exemplo incorreto
      </h1>
      <Button
        onClick={() => setCount(count + 1)}
      >
        Incrementar Count
      </Button>
      <p
        className="text-center text-neutral-300"
      >
        Count: {count}
      </p>
      <Button
        onClick={() => setOtherState(!otherState)}
      >
        Alterar OtherState
      </Button>
      <p
        className="text-center text-neutral-300"
      >
        OtherState: {String(otherState)}
      </p>
      <Button
        onClick={handleClick}
      >
        Executar função
      </Button>
    </div>
  );
}

export default NotUsingUseCallback