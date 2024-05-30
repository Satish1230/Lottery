import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LudoBoard from './LudoBoard'
import Todo from './todo'
import Lottery from './lottery'
import Ticket from './ticket'

function App() {


  return (
    <>
      {/* <LudoBoard /> */}
      {/* <Todo /> */}
      <Lottery n={3} winningsum={15} />
    </>
  )
}

export default App
