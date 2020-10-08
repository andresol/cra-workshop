import React, { useState } from "react"
import "./App.css"
import { HelloWorldButton } from "features/HelloWorld/HelloWorldButton"
import Incrementor  from "features/Incrementor"
import TextInput from "UI/TextInput"
import RangeInput from "UI/RangeInput"

function App() {
  const [text, setText] = useState("")
  const [num, setNum] = useState(0)

  return (
    <div className="App">
      <TextInput id="test-input" label="Test input" value={text} onChange={setText}/>
      <RangeInput id="range-input" label="Range" value={num} onChange={setNum} min={0} max={100}/>
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
