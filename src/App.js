import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home, Register, SignIn, Products, Category } from "./pages"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:categoryId">
          <Category />
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
