import { useState } from 'react'
import Welcome from '../components/Welcome'
import "../styles/App.css"

function App() {

  return (
    <div id="app">
      <h1>Quiz sobre React</h1>
      <Welcome/>
    </div>
  )
}

export default App