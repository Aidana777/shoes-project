import React from 'react'
import Card from './components/Card/Card'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header/>
      <Card/>
    </div>
  )
}

export default App