import React, { useState } from "react"
import "./App.css"
import { HelloWorldButton } from "features/HelloWorld/HelloWorldButton"
import Incrementor  from "features/Incrementor"
import TextInput from "UI/TextInput"

function App() {
  const [text, setText] = useState("")

  return (
    <div className="App">
      <TextInput id="test-input" label="Test input" value={text} onChange={setText}/>
      <Incrementor limit={12}/>
      <HelloWorldButton/>
      {/* <Ticker message="This is a long and scrolling message" size={4}/> */}
    </div>
  )
}

// (
//   React.createElement("div", { className: "App" },
//     React.createElement(HelloWorld, {}, React.createElement(() => "hello again!"))
//   )
// )

export default App
