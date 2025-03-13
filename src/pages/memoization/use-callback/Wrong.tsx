import { Button } from "@/components/ui/button";
import { useState } from "react";

type Props = { onClick: VoidFunction };

const ButtonComponent = ({ onClick }:Props) => {
  console.log("Renderizou Button");
  return <Button onClick={onClick}>Clique Aqui</Button>;
};

const NotUsingUseCallback = () => {
  const [count, setCount] = useState<number>(0);

  // Essa função é recriada toda vez que 
  // o componente NotUsingUseCallback renderiza
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>Contagem: {count}</p>
      <ButtonComponent onClick={increment} />
    </div>
  );
};

export default NotUsingUseCallback;