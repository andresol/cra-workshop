import React from "react"
import "./App.css"
import Router from "features/Router"
import { BrowserRouter, NavLink } from "react-router-dom"
import ContextDemo from "features/ContextDemo"

function App() {
  return (
    <ContextDemo>
      <BrowserRouter>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/range/5/50">Range 5-50</NavLink>
        <NavLink to="/incrementor">Incrementor</NavLink>
        <div className="App">
          <Router/>
        </div>
      </BrowserRouter>
    </ContextDemo>
  )
}

// (
//   React.createElement("div", { className: "App" },
//     React.createElement(HelloWorld, {}, React.createElement(() => "hello again!"))
//   )
// )

export default App
