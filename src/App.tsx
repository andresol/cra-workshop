import React from "react"
import "./App.css"
import Router from "features/Router"
import { BrowserRouter, NavLink } from "react-router-dom"
import ContextDemo from "features/ContextDemo"
import UserContextProvider from "features/UserData"

function App() {
  return (
    <ContextDemo>
      <UserContextProvider>
        <BrowserRouter>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/range/5/50">Range 5-50</NavLink>
          <NavLink to="/incrementor">Incrementor</NavLink>
          <div className="App">
            <Router/>
          </div>
        </BrowserRouter>
      </UserContextProvider>
    </ContextDemo>
  )
}

// (
//   React.createElement("div", { className: "App" },
//     React.createElement(HelloWorld, {}, React.createElement(() => "hello again!"))
//   )
// )

export default App
