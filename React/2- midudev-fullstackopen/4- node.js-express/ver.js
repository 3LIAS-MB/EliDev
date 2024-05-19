import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

// Se pone fuera porque si no la constante se
// crea cada vez que se renderice el componente
const INITIAL_COUNTER_STATE = {
  left: 2,
  right: 2,
  mensaje: 'Mensaje en el estado'
}

const App = () => {
  // const[left, setLeft] = useState(10);
  // const[right, setRight] = useState(20);
  const [counters, setCounters] = useState(INITIAL_COUNTER_STATE)
  const [clicks, setClicks] = useState([])

  const handleClickLeft = () => {
    const newCountersState = {
      // "spread operator" (operador de propagación)
      ...counters,
      left: counters.left + 1
    }
    // counters.left++; -> Incorrecto
    setCounters(newCountersState)
    setClicks(prevClicks => ([...prevClicks, 'L'])
    )
  }

  const handleClickRight = () => {
    // Siempre se actualiza el estado de esta forma
    setCounters({
      ...counters,
      right: counters.right + 1
    })
    setClicks(prevClicks => ([...prevClicks, 'R']))
  }

  const handleReset = () => {
    setCounters(INITIAL_COUNTER_STATE)
    setClicks([])
  }

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
      <p>
        <button onClick={handleReset}>reset</button>
      </p>
      <p>Clicks totales: {clicks.length}</p>
      {clicks.join(', ')}
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
