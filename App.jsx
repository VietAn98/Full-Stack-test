import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ObjectLiteral from "./src/pages/ObjectLiteral";
import GetUrlParams from "./src/pages/GetUrlParams";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/objectLiteral">
          <ObjectLiteral />
        </Route>
        <Route path="/">
          <GetUrlParams />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
