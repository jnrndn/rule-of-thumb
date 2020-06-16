import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Content from "./containers/Content/Content"
import Navbar from "./containers/Navbar/Navbar"
import PastTrails from "./containers/PastTrails/PastTrails"

const App = () => {
  return (
    <Switch>
      <Route path="/past-trails" component={PastTrails} />
      <Route path="/how-it-works" component={Navbar} />
      <Route path="/log-in" component={Navbar} />
      <Route path="/" component={Content} />
      <Route path="*" component={Content} />
    </Switch>
  )
}

export default App
