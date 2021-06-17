import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home, Register, SignIn } from "./pages"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <h1>Products</h1>
        </Route>
        <Route exact path="/products/:categoryId">
          <h1>Products Category</h1>
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
