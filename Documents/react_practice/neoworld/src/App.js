import React from 'react'

// A functional component
const Welcome = () => {
  return <h1>Hello, Welcome to React!</h1>
}

// Another functional component
const App = () => {
  return (
    <div>
      <Welcome />
      <p>This is your first React app!</p>
    </div>
  )
}

export default App
