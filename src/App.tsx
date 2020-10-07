import React from "react"
import "./App.css"
import { HelloWorldButton } from "./HelloWorldButton"
import { Incrementor } from "./Incrementor"
import { Ticker } from "./Ticker"

function App() {
  return (
    <div className="App">
      <Incrementor limit={12}/>
      <HelloWorldButton/>
      <Ticker message="This is a long and scrolling message" size={4}/>
    </div>
  )
}

// (
//   React.createElement("div", { className: "App" },
//     React.createElement(HelloWorld, {}, React.createElement(() => "hello again!"))
//   )
// )

export default App
