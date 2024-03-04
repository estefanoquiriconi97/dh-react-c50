import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Card } from './components/Card'
import { Card2 } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <h1>Hola Mundo React!!</h1>
      <Card />
      <Card />
      <Card2 />
    </>
  )
}

export default App
