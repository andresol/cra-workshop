import React from "react"
import "./App.css"
import { HelloWorldButton } from "./HelloWorldButton"
import { Incrementor } from "./Incrementor"

function App() {
  return (
    <div className="App">
      <Incrementor limit={12}/>
      <HelloWorldButton/>
    </div>
  )
}

// (
//   React.createElement("div", { className: "App" },
//     React.createElement(HelloWorld, {}, React.createElement(() => "hello again!"))
//   )
// )

export default App
