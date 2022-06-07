
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Contato = () => {

  const {counter} = useCounterContext();

  const {color} = useTitleColorContext()
  return (
    <div>
      <h1 style={{ color: color }}> Contato </h1>
      <p>Valor do contador:{counter}</p>
    </div>
  )
}

export default Contato