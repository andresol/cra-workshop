import React from "react"
import "./App.css"
import Repeat from "features/Repeat"
import BigBorder from "features/BigBorder"

function App() {
  return (
    <div className="App">
      <Repeat>
        <BigBorder>
          <p>This is a child</p>
        </BigBorder>
      </Repeat>
    </div>
  )
}

// (
//   React.createElement("div", { className: "App" },
//     React.createElement(HelloWorld, {}, React.createElement(() => "hello again!"))
//   )
// )

export default App
