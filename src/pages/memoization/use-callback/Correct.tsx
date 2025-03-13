import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";

type Props = { onClick: VoidFunction };

const ButtonComponent = ({ onClick }:Props) => {
  console.log("Renderizou Button");
  return <Button onClick={onClick}>Clique Aqui</Button>;
};

const UsingUseCallback = () => {
  const [count, setCount] = useState<number>(0);

  // `increment` agora é memoizado e 
  // só será recriado se `setCount` mudar
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Contagem: {count}</p>
      <ButtonComponent onClick={increment} />
    </div>
  );
};

export default UsingUseCallback;