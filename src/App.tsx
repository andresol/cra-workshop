import React from "react"
import "./App.css"
import ConnectedTicker from "features/ConnectedTicker"
import { ComposeExample } from "ComposeExample"

function App() {
  return (
    <div className="App">
      <ComposeExample header={<h1>This is the connected ticker</h1>}>
        <ConnectedTicker/>
      </ComposeExample>
    </div>
  )
}

// (
//   React.createElement("div", { className: "App" },
//     React.createElement(HelloWorld, {}, React.createElement(() => "hello again!"))
//   )
// )

export default App
