import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route exact path="/products">
          <h1>Products</h1>
        </Route>
        <Route exact path="/products/:categoryId">
          <h1>Products Category</h1>
        </Route>
        <Route path="/signin">
          <h1>SignIn</h1>
        </Route>
        <Route path="/register">
          <h1>Register</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
