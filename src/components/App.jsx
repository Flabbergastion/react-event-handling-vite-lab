// src/App.jsx
import { useState } from 'react'
import '../App.css'
import PasswordInput from './PasswordInput'
import SubmitButton from './SubmitButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PasswordInput/>
      <SubmitButton/>
    </div>
  )
}

export default App