import { useState } from 'react'
import './App.css'
import Page from './components/Page'
import Main from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page></Page>
    </>
  )
}

export default App
