import Repeat from "./features/Repeat"
import ListMessages from "./features/ListMessages"

function App() {
  return (
    <>
      <Repeat count={5}>
        <p>Repeated message</p>
      </Repeat>
      <ListMessages />
    </>
  )
}

export default App
