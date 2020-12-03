import HelloWorld from "./HelloWorld"
import Incrementor from "./Incrementor"
import Ticker from "./Ticker"

function App() {
  return (
    <>
      <HelloWorld newHeading="Goodbye from app"/>
      <Incrementor/>
      <div>
        <Ticker message="This is some scrolling text" size={5}/>
      </div>
    </>
  )
}

export default App
