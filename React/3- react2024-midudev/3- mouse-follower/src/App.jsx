import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // [] → solo se ejecuta una vez cuando se monta el componente
  // [enabled] → se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined → se ejecuta cada vez que se renderiza el componente

  // pointer move
  useEffect(() => {
    const handleMove = (event) => {
      console.log(event)
      const { clientX, clientY } = event
      // console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      console.log('effect', { enabled })
      window.addEventListener('pointermove', handleMove)
    }

    // Montar componente -> cuando se renderiza por primera vez
    // 1) Se ejecuta siempre que se desmonte el componente,
    // 2) Se ejecuta tambien cuando cambia la dependencia
    return () => {
      console.log('clean up')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // change body className
  // 'document' no existe en el servidor -> se lo usa en un efecto
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
    console.log('clean up 2')
    return () => {
      document.body.classList.remove('no-cursor')
      console.log('clean up 3')
    }
  })

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        // q al hacer click no sirva de nada (?)
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} puntero
      </button>
    </>
  )
}

function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
