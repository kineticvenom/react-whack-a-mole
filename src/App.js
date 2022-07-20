import './App.css'
import React, { useEffect, useState } from 'react'
import Mole from './components/mole/Mole.js'

function App() {
  // states
  const [dens, setDens] = useState(getDensState())
  const [points, setPoints] = useState(0)

  // effects
  useEffect(() => {
    startGame()
  }, [])

  // this function allows the state of the dens(whether or not it contains a mole) every 1500ms.
  function startGame() {
    setInterval(() => {
      setDens(getDensState())
    }, 1500)
  }

  function getDensState() { // anytime the number passed into the map function is between 1-9 it will return true therefore enableing a mole to be displayed.
    return new Array(9).fill({}).map(() => {
      return { 
        isMoleVisible: [true,false][Math.round(Math.random())]
      }
    })
  }
//This function increases the state the keeps track of points
  function onMoleWhacked() {
      setPoints(points + 1)
  }

  // renders the dens 
  const denElements = dens.map((den, index) => {
    return (
      <Mole key={`mole-${index}`} value={den} whack={onMoleWhacked}/>
    )
  })

  return (
    <div className="App">
      <h1>WHACK-A-MOLE!</h1>
      <h2>Points: { points }</h2>
      <div className="dens" >
        { denElements }
        
        
        <div style={{clear: 'both'}}></div>
      </div>
    </div>
  )
}

export default App
