// import { useContext } from "react"
import { useCounterContext } from "../hooks/useCounterContext"
// import { CounterContextProvider } from './../context/CounterContext';

const ChangeCounter = () => {
    const {counter, setCounter} = useCounterContext()
  return (
    <div>
        <button onClick={()=> setCounter(counter + 1 )}>OK</button>
    </div>
  )
}

export default ChangeCounter