import React from 'react'
import { useCounterContext } from '../hooks/useCounterContext'

// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'
import ChangeCounter from './ChangeCounter'

import { useTitleColorContext } from '../hooks/useTitleColorContext'


const Home = () => {
    // const {counter} = useContext(CounterContext)
    const {counter} = useCounterContext();

    const {color, dispatch} = useTitleColorContext()


    const setColorType = (color) => {
      dispatch({type:color})      
    }


  return (
    <div>
        <h1 style={{color: color}}> Home </h1>
        <p>Valor do contador:{counter}</p>
        <ChangeCounter/>
        <button  onClick={() => setColorType("YELLOW")}>Amarelo</button>
        <button  onClick={() => setColorType("RED")}>Vermelho</button>
        <button  onClick={() => setColorType("BLUE")}>Azul</button>
        <button  onClick={() => setColorType("BLACK")}>Preto</button>
    </div>
  )
}

export default Home