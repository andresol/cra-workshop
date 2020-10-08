import React, { useState } from "react"
import "./App.css"
import ConnectedTicker from "features/ConnectedTicker"

function App() {
  return (
    <div className="App">
      <ConnectedTicker/>
    </div>
  )
}

// (
//   React.createElement("div", { className: "App" },
//     React.createElement(HelloWorld, {}, React.createElement(() => "hello again!"))
//   )
// )

export default App
