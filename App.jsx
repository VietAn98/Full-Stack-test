import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetUrlParams from "./src/pages/GetUrlParams";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <GetUrlParams />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
