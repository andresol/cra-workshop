import React from "react"
import "./App.css"
import ConnectedTicker from "features/ConnectedTicker"
import { ComposeExample } from "ComposeExample"
import BigBorder from "features/BigBorder"
import EitherAOrB from "features/EitherAOrB"

function App() {
  return (
    <div className="App">
      <EitherAOrB a={
        <BigBorder>
          <ComposeExample header={<h1>This is the connected ticker</h1>}>
            <ConnectedTicker/>
          </ComposeExample>
        </BigBorder>
      }
      b={
        <ComposeExample header={<h1>This is the connected ticker</h1>}>
          <ConnectedTicker/>
        </ComposeExample>
      }/>
    </div>
  )
}

// (
//   React.createElement("div", { className: "App" },
//     React.createElement(HelloWorld, {}, React.createElement(() => "hello again!"))
//   )
// )

export default App
