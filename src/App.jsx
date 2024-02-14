import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React website</h1>
      <button className="bg-orange-500 text-white px-2 py-2 rounded-md">Hire me</button>
    </>
  )
}

export default App
